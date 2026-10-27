# Brainbox Energy Services Limited — Corporate Website

Responsive HTML, CSS and JavaScript website for Brainbox Energy Services Limited.

## Files

- `index.html`: page shell, navigation and footer
- `style.css`: responsive branding and layout; desktop navigation links increased to **14px**
- `script.js`: Home, About, Services, Capabilities, Insights, Contact and enquiry interaction
- `assets/`: logo and technical photography **still to be uploaded to this repository**

## Complete asset package

The accompanying `brainbox-energy-website-v1.1.zip` download supplied in the ChatGPT conversation includes the original `assets/` folder and the updated navigation CSS. Upload the `assets` directory from that ZIP to the repository root to complete the GitHub-hosted version.

### Required files

`assets/logo.png`, `assets/profile-0.jpg`, `assets/profile-18.jpg`, `assets/profile-13.jpg`, `assets/profile-19.jpg`, `assets/profile-9.jpg`, `assets/profile-22.png`

Additional image files may be kept in `assets/` for future use.

## Preview

After uploading the assets, open `index.html` locally or enable GitHub Pages from the main branch (root folder).

## Contact enquiries

The enquiry form creates a mailto draft in the visitor's email app. It does not use a server or store form submissions.

## Attribution

Technical photographs and content come from the official company profile. Technical experience belonging to parent company Brainbox Matrix Services Limited must not be attributed to BESL as its own completed client projects.


## Content update — v5 alignment (October 2026)

The main site retains the original Brainbox UI while incorporating the reviewed colleague v5 content: ten engineering services, procurement capability summaries, structured execution, technical guidance, a dedicated `#quote` page, and a separate `#contact` general enquiry form.

The colleague's separate `capability-statement.pdf` is **not yet deployed** to GitHub; the site links to the capabilities overview and invites users to request supporting documents instead. The submission forms currently prepare emails using the visitor's email application; there is no hosted form backend.

All photographs in the original site remain illustrative of company-profile technical activity, not verified named client case studies. No new certification or client endorsement claims have been introduced.


## Workshop photography update (October 2026)

The homepage and Capabilities page have a new workshop photo gallery. Ten optimized WebP files are prepared in the companion `brainbox-workshop-assets.zip` archive in the ChatGPT conversation, under `assets/`. **The binary WebP files are not yet present in this GitHub repository.** Extract the archive at the project root (merging its `assets/` folder with the existing one) and commit and push the images:

```bash
unzip brainbox-workshop-assets.zip
git add assets/workshop-*.webp
git commit -m "Add workshop and equipment photography"
git push origin main
```

The gallery has an existing-photo fallback so an unavailable file does not show a broken-image icon while image deployment is pending. Machine descriptions are conservative until technical equipment names are confirmed.

Both `#contact` and `#quote` now offer an enquiry-type selector and render scenario-specific required questions. Enquiries still open the visitor's mail client; there is no backend. For a production workflow, implement a secured server-side form endpoint.
