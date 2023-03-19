variable "vercel_token" {}
variable "repository_name" {}
variable "vercel_project_name" {}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    vercel = {
      source  = "chronark/vercel"
      version = "0.14.4"
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


provider "vercel" {
  token = var.vercel_token
}

# Configure the AWS Provider
provider "aws" {
  region  = "ap-northeast-1"
  profile = "personal-toiki"
}

provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
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

