param(
  [string]$ProjectId = "valued-range-443614-j4",
  [string]$Region = "asia-southeast1",
  [string]$ServiceName = "kiniem70nam-vmu",
  [string]$Domain = "kiniem70nam.vmu.holilihu.online"
)

$ErrorActionPreference = "Stop"

Write-Host "==> Setting active project to $ProjectId"
gcloud config set project $ProjectId --quiet | Out-Null
gcloud config set run/region $Region --quiet | Out-Null

Write-Host "==> Enabling required APIs"
gcloud services enable `
  run.googleapis.com `
  cloudbuild.googleapis.com `
  artifactregistry.googleapis.com `
  cloudresourcemanager.googleapis.com `
  --project $ProjectId `
  --quiet

Write-Host "==> Deploying $ServiceName to Cloud Run ($Region)"
gcloud run deploy $ServiceName `
  --source . `
  --region $Region `
  --project $ProjectId `
  --allow-unauthenticated `
  --memory 512Mi `
  --cpu 1 `
  --max-instances 10 `
  --set-env-vars HOSTNAME=0.0.0.0,NODE_ENV=production `
  --quiet

$serviceUrl = gcloud run services describe $ServiceName `
  --region $Region `
  --project $ProjectId `
  --format "value(status.url)"

Write-Host "==> Service URL: $serviceUrl"

if ($Domain) {
  Write-Host "==> Attempting Cloud Run domain mapping for $Domain"
  gcloud beta run domain-mappings create `
    --service $ServiceName `
    --domain $Domain `
    --region $Region `
    --project $ProjectId `
    --quiet

  Write-Host "==> Domain mapping status"
  gcloud beta run domain-mappings describe `
    --domain $Domain `
    --region $Region `
    --project $ProjectId
}
