"""Make optimized local copies of the user's assets; never modify originals."""
from pathlib import Path
from PIL import Image, ImageOps
import json
import shutil

root = Path(__file__).resolve().parents[1]
pictures = Path(r'C:\Users\asad\Pictures')
assets = {
    'xiv-hero': ('xiv/1790514727847.jpeg', 1280),
    'xiv-collection': ('xiv/1790514727894.jpeg', 1280),
    'xiv-mobile': ('xiv/1790514735797.jpeg', 900),
    'configurator-hero': ('Product Configurator/1790090197361.jpeg', 1280),
    'configurator-sensors': ('Product Configurator/1790090197067.jpeg', 1280),
    'configurator-plan': ('Product Configurator/1790090197312.jpeg', 1280),
    'lookbook-hero': ('Shoppable Lookbook/1790091161129.jpeg', 1280),
    'lookbook-page': ('Shoppable Lookbook/1790091166701.jpeg', 1000),
    'lookbook-cart': ('Shoppable Lookbook/1790091156661.jpeg', 1280),
    'phishing-hero': ('multimodal phising detection system/user1a.png .png', 1600),
    'phishing-scan': ('multimodal phising detection system/user5.png', 1600),
    'phishing-dashboard': ('multimodal phising detection system/admin 1.png', 1600),
    'phishing-architecture': ('multimodal phising detection system/user 2.png', 1600),
    'portrait': ('Warm Professional Portrait.png', 800),
    'luminara-hero': ('luminara/a1.png', 1600),
    'luminara-collection': ('luminara/a2.png', 1600),
    'luminara-quiz': ('luminara/a6.png', 1600),
    'luminara-concierge': ('luminara/a7.png', 1600),
    'luminara-cart': ('luminara/a8.png', 1600),
    'luminara-product': ('luminara/a9.png', 1600),
    'luminara-checkout': ('luminara/a10.png', 1600),
}
output = root / 'public/images'
output.mkdir(parents=True, exist_ok=True)
manifest = {}
for name, (source, width) in assets.items():
    image = ImageOps.exif_transpose(Image.open(pictures / source)).convert('RGB')
    image.thumbnail((width, 2200), Image.Resampling.LANCZOS)
    image.save(output / f'{name}.webp', 'WEBP', quality=86, method=6)
    manifest[name] = {'src': f'/images/{name}.webp', 'width': image.width, 'height': image.height}
    print(name, image.size, (output / f'{name}.webp').stat().st_size)
(root / 'src/data').mkdir(parents=True, exist_ok=True)
(root / 'src/data/images.js').write_text('export const images = ' + json.dumps(manifest, indent=2) + ';\n', encoding='utf-8')
resume_dir = root / 'public/resume'
resume_dir.mkdir(parents=True, exist_ok=True)
for original, target in [('Asad_Abbas_Shopify_Resume.pdf', 'asad-abbas-shopify.pdf'), ('Asad_Abbas_fullstack_resume.pdf', 'asad-abbas-fullstack.pdf')]:
    shutil.copy2(Path(r'C:\Users\asad\Desktop') / original, resume_dir / target)
