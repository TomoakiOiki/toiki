terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
  backend "s3" {
    bucket  = "toiki-terraform-state"
    region  = "ap-northeast-1"
    key     = "terraform.tfstate"
    profile = "personal-toiki"
    encrypt = true
  }
}

# Configure the AWS Provider
provider "aws" {
  region  = "ap-northeast-1"
  profile = "personal-toiki"
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "toiki-terraform-state"
  acl    = "private"
  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket_public_access_block" "terraform_state" {
  bucket                  = aws_s3_bucket.terraform_state.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

