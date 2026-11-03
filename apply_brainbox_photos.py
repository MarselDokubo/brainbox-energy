#!/usr/bin/env python3
"""Conservative Brainbox photo refresh. Run at the root of the local brainbox-energy repository."""
from pathlib import Path
import shutil
from datetime import datetime
repo=Path.cwd()
js=repo/'script-contact-refined-20261103.js'
assets=repo/'assets'
if not js.exists() or not (repo/'.git').exists():
    raise SystemExit('Open a terminal in your local brainbox-energy Git repository first.')
source=js.read_text(encoding='utf-8')
archive=repo/'brainbox-photo-refresh-assets'
if not archive.is_dir():
    raise SystemExit('Extract this ZIP into your repo root; brainbox-photo-refresh-assets folder must exist.')
backup=repo/'brainbox-photo-refresh-backup'
backup.mkdir(exist_ok=True)
shutil.copy2(js,backup/(js.name+'.'+datetime.now().strftime('%Y%m%d-%H%M%S')+'.bak'))
changes={
    # Only change the About page's story image; never globally overwrite profile-0.jpg.
    '<img src="${A}profile-0.jpg" alt="Transformer maintenance team">':'<img src="${A}workshop-transformer-inspection.webp" alt="PPE-equipped engineering team inspecting transformer equipment">',
}
for old,new in changes.items():
    if old in source:
        source=source.replace(old,new,1)
    else:
        print('Skipped: original About image markup has changed; please check manually.')
for img in archive.glob('*.webp'):
    dest=assets/img.name
    if dest.exists():
        print('Keeping existing asset:',dest)
    else:
        shutil.copy2(img,dest)
        print('Added:',dest)
js.write_text(source,encoding='utf-8')
print('Done. Homepage hero, footer image, profile-18.jpg, profile-19.jpg and profile-9.jpg were not overwritten.')
print('Inspect locally before committing. Undo script edits with the saved backup if needed.')
