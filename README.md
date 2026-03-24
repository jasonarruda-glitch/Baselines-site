# Baselines website

This is a deploy ready static website for **Baselines** built for **GitHub Pages**.

## Included files

- `index.html`
- `styles.css`
- `script.js`
- `CNAME`
- `.github/workflows/pages.yml`

## What I verified

- `index.html` loads the local CSS and JavaScript files correctly
- all internal section links point to existing section IDs
- the contact form note target exists and the front end script can update it
- the GitHub Pages workflow file is included
- the custom domain file is included and contains only `baselinesusa.com`

## Important before upload

Upload the **contents** of this package to the **root** of your GitHub repository.
Do **not** upload the zip file itself into the repo.
Do **not** put these files inside another folder in the repo.
Make sure the hidden `.github` folder is included.

## Fastest way to publish on GitHub Pages

1. Create a new public GitHub repository.
2. Extract this zip file on your computer.
3. Upload all extracted files and folders to the root of the repository, including the hidden `.github` folder.
4. In GitHub, open **Settings > Pages**.
5. Under **Build and deployment**, select **GitHub Actions**.
6. In the custom domain field in GitHub Pages settings, enter `baselinesusa.com`.
7. Push to the `main` branch and wait for the Pages workflow to finish.

## DNS note

The `CNAME` file is included for the custom domain, but GitHub still expects the custom domain to be set in the repository Pages settings as well.

## Customization

### Replace text
Open `index.html` and change any copy you want.

### Update colors
Open `styles.css` and edit the variables at the top:
- `--brand`
- `--brand-2`
- `--brand-3`

### Make the contact form live
Replace the current `action="#"` in the form with a real form endpoint such as Formspree, Basin, Tally, or your email platform.

## Good next upgrades

- add real product photography
- connect a working lead form
- add email capture
- add a school and coach outreach page
- add a product detail page for Core Series
