resource "aws_route53_zone" "toiki_net" {
  name = "toiki.net"
}

resource "aws_acm_certificate" "frontend" {
  domain_name       = "toiki.net"
  validation_method = "DNS"
  provider          = aws.us_east_1
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.toiki_net.zone_id
  name    = "toiki.net"
  type    = "A"
  ttl     = "300"
  records = ["76.76.21.21"] # vercelのDNS
}
