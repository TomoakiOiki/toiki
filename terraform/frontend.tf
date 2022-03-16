resource "vercel_project" "main" {
  name           = var.vercel_project_name
  framework      = "nextjs"
  root_directory = "frontend"
  git_repository {
    type = "github"
    repo = var.repository_name
  }
}
