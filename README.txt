# Brainbox selective safety-photo refresh

This ZIP is for the existing `MarselDokubo/brainbox-energy` repository. It does **not** replace the homepage hero, footer banner, or the approved homepage `WHO WE ARE` and `VERIFY` images. It adds ten clean workshop images using filenames already referenced by the website's workshop gallery. It also updates *only the About story placement* to use a PPE-equipped technician photo. Original source asset files stay untouched.

## Install locally

1. Extract this ZIP **inside the root** of your local `brainbox-energy` repository (not in a nested parent folder).
2. Run `python apply_brainbox_photos.py` (or `python3 apply_brainbox_photos.py`).
3. Run your local preview and inspect Home / About / Services / Capabilities / Insights. The workshop images should now load where previously absent. Confirm all photo captions and the site's existing safety language are accurate.
4. Check `git diff` and `git status`. When satisfied:
   ```
   git add assets/workshop-*.webp script-contact-refined-20261103.js
   git commit -m "Refresh workshop imagery with approved PPE-compliant photographs"
   git push origin main
   ```

For rollback: `git revert HEAD` after publishing, or restore the saved script backup and remove the newly added workshop files before committing.

Note: PPE compliance and suitability should also be reviewed against the specific task and site rules; visible PPE in photos alone is not a complete safety audit. No unsupported certification or project claims are added.
