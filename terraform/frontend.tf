data "aws_route53_zone" "main" {
  name = "toiki.net"
}

resource "aws_route53_record" "cloudfront_for_web" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = data.aws_route53_zone.main.name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.frontend.domain_name
    zone_id                = aws_cloudfront_distribution.frontend.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_s3_bucket" "frontend" {
  bucket = "toiki-frontend"
  acl    = "private"

  # フロントエンドもバージョニングしていく
  versioning {
    enabled = true
  }

  website {
    error_document = "index.html" # / 以外でリロードした場合は404になるのでindex経由でルーティングする
    index_document = "index.html"
  }
}

locals {
  s3_origin_id = "S3-Website-${aws_s3_bucket.frontend.website_endpoint}"
  extension_to_content_type = {
    txt  = "text/plain"
    css  = "text/css"
    html = "text/html"
    js   = "application/javascript"
    map  = "application/json" # .js.map
    json = "application/json"
    jpg  = "image/jpeg"
    jpeg = "image/jpeg"
    svg  = "image/svg+xml"
    png  = "image/png"
  }
}

resource "aws_s3_bucket_object" "frontend_files" {
  for_each = fileset("../frontend/build", "**/*")
  bucket   = aws_s3_bucket.frontend.id
  key      = each.value
  content_type = lookup(
    local.extension_to_content_type,
    element(split(".", each.value), length(split(".", each.value)) - 1),
    "text/plain"
  )
  content_encoding = "utf-8"

  source = "../frontend/build/${each.value}"
  etag   = filemd5("../frontend/build/${each.value}")
}

resource "aws_s3_bucket_policy" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "PublicRead",
        "Effect" : "Allow",
        "Principal" : "*",
        "Action" : [
          "s3:GetObject",
          "s3:GetObjectVersion"
        ],
        "Resource" : "${aws_s3_bucket.frontend.arn}/*"
      }
    ]
  })
}

resource "aws_s3_bucket_public_access_block" "frontend" {
  bucket             = aws_s3_bucket.frontend.id
  block_public_acls  = true
  ignore_public_acls = true
}

# Distributionの作成
resource "aws_cloudfront_distribution" "frontend" {
  origin {
    domain_name = aws_s3_bucket.frontend.website_endpoint
    origin_id   = local.s3_origin_id
    # S3のstatic hostingだとこれが必要
    # see: https://github.com/hashicorp/terraform-provider-aws/issues/7847
    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  # TODO: ドメイン取ってSSL化する
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.frontend.arn
    ssl_support_method  = "sni-only"
  }

  aliases = ["toiki.net"]


  enabled             = true
  default_root_object = "index.html"
  wait_for_deployment = true
  is_ipv6_enabled     = true

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.s3_origin_id
    compress               = true
    viewer_protocol_policy = "allow-all"

    # クエリパラメータとcookieはS3にわたす
    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
