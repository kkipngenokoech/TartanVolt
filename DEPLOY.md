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

4) Push images to GitHub Container Registry (GHCR)

If your workflow builds and pushes a Docker image to GHCR, the runner may not have permissions to create organization packages with the default `GITHUB_TOKEN`. Create a Personal Access Token (PAT) with package write rights and add it as a secret:

 - Create a PAT with scope `write:packages` (and `repo` if your repository is private). For fine-grained tokens, grant Packages -> Write for this repository.
 - Add two repository secrets:
	 - `GHCR_PAT` — the PAT value
	 - `GHCR_USERNAME` — your GitHub username (e.g., `kkipngenokoech`)

Use the following GH CLI commands to add the secrets from your machine:

```bash
gh secret set GHCR_PAT --body "<YOUR_PAT>"
gh secret set GHCR_USERNAME --body "kkipngenokoech"
```

Then update the workflow to use these secrets for the `docker/login-action` step. The repository already contains a workflow that expects these secrets.

5) Trigger a deploy

```bash
git add .github/workflows/deploy.yml DEPLOY.md
git commit -m "Add GitHub Actions deploy to Andasy"
git push origin main
```

Workflow runs will appear under the repository Actions tab.
