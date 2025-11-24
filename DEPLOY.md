Deployment to Andasy (GitHub Actions)

1) Obtain an Andasy access token (run locally while authenticated):

```bash
andasy auth token
# copy the returned token value
```

2) Add the token to your GitHub repository secrets:

 - Navigate to your repo -> Settings -> Secrets and variables -> Actions
 - Click "New repository secret"
 - Name: `ANDASY_ACCESS_TOKEN`
 - Value: paste the token from step 1

Or use the GitHub CLI (if installed):

```bash
# replace "<TOKEN>" with the token value
gh secret set ANDASY_ACCESS_TOKEN --body "<TOKEN>"
```

3) Workflow behavior

 - The workflow at `.github/workflows/deploy.yml` runs on pushes to `main`.
 - It uses `quarksgroup/andasy-action@main` and reads `ANDASY_ACCESS_TOKEN` from secrets.
 - If you need to pass a specific app name or customize the deploy, either update the action usage or add an `andasy.hcl` with the desired configuration.

4) Trigger a deploy

```bash
git add .github/workflows/deploy.yml DEPLOY.md
git commit -m "Add GitHub Actions deploy to Andasy"
git push origin main
```

Workflow runs will appear under the repository Actions tab.
