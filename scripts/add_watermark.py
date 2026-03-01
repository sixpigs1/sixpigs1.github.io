#!/usr/bin/env python3
"""
Batch watermark script for public/images/
Requires: pip install Pillow
Usage: python scripts/add_watermark.py
"""

import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

IMAGES_DIR = Path(__file__).parent.parent / "public" / "test"
WATERMARK_TEXT = "© Zewei Ye"
OUTPUT_SUFFIX = ""  # overwrite originals; set to "_wm" to create new files

def add_watermark(image_path: Path):
    try:
        img = Image.open(image_path).convert("RGBA")
        overlay = Image.new("RGBA", img.size, (255, 255, 255, 0))
        draw = ImageDraw.Draw(overlay)

        # Font size relative to image size
        font_size = max(16, img.width // 30)
        try:
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", font_size)
        except:
            font = ImageFont.load_default()

        text = WATERMARK_TEXT
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]

        margin = 12
        x = img.width - text_width - margin
        y = img.height - text_height - margin

        # Shadow for readability
        draw.text((x + 1, y + 1), text, font=font, fill=(0, 0, 0, 100))
        # Main text
        draw.text((x, y), text, font=font, fill=(255, 255, 255, 180))

        watermarked = Image.alpha_composite(img, overlay).convert("RGB")

        out_path = image_path.with_stem(image_path.stem + OUTPUT_SUFFIX)
        watermarked.save(out_path, quality=92, optimize=True)
        print(f"  ✓ {image_path.relative_to(IMAGES_DIR.parent.parent)}")
    except Exception as e:
        print(f"  ✗ {image_path}: {e}")


def main():
    extensions = {".jpg", ".jpeg", ".png"}
    files = [p for p in IMAGES_DIR.rglob("*") if p.suffix.lower() in extensions]
    print(f"Found {len(files)} images. Adding watermarks...")
    for f in files:
        add_watermark(f)
    print("Done.")


if __name__ == "__main__":
    main()
