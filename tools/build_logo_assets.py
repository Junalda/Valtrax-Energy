"""
Builds the web logo assets from the supplied transparent master logo
(brand/valtrax-logo-original.png, 1536x1024 RGBA, raster only — no vector source exists).

Outputs (public/brand/):
  valtrax-logo.webp / .png      Full stacked logo, trimmed (structured data, large use)
  valtrax-lockup.webp           Horizontal lockup for the header (on white)
  valtrax-lockup-light.webp     Same lockup with navy reversed to white (on navy)
And icons in public/: favicon.ico, apple-touch-icon.png

The horizontal lockup re-arranges the original artwork (symbol left, VALTRAX and the
ENERGY line right) without redrawing or recolouring it, so the logo stays legible at
header height. The "OIL TRADING" line is omitted there because it would render at ~5px.

Run: python3 tools/build_logo_assets.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "brand" / "valtrax-logo-original.png"
OUT = ROOT / "public" / "brand"
OUT.mkdir(parents=True, exist_ok=True)

master = Image.open(SRC).convert("RGBA")
alpha = master.getchannel("A")


def trim(img: Image.Image, pad: int = 0) -> Image.Image:
    box = img.getchannel("A").getbbox()
    box = (max(box[0] - pad, 0), max(box[1] - pad, 0), min(box[2] + pad, img.width), min(box[3] + pad, img.height))
    return img.crop(box)


def band(y0: int, y1: int) -> Image.Image:
    """Crop a horizontal band of the master and trim it to its content."""
    return trim(master.crop((0, y0, master.width, y1)))


# Horizontal bands detected in the master (rows with opaque pixels).
mark = band(90, 540)          # V + flame + drop symbol
word = band(550, 710)         # VALTRAX
energy = band(735, 812)       # ── ENERGY ──


def reverse(img: Image.Image) -> Image.Image:
    """Navy -> white, gold untouched, alpha preserved (for dark backgrounds)."""
    out = img.copy()
    px = out.load()
    for y in range(out.height):
        for x in range(out.width):
            r, g, b, a = px[x, y]
            if a and b >= r:  # navy family (blue dominant); gold has r >> b
                px[x, y] = (255, 255, 255, a)
    return out


def save_webp(img: Image.Image, name: str, height: int | None = None):
    if height:
        img = img.resize((round(img.width * height / img.height), height), Image.LANCZOS)
    img.save(OUT / name, "WEBP", quality=90, method=6)
    print(f"{name}: {img.width}x{img.height}")
    return img.size


# --- Full stacked logo ------------------------------------------------------------
full = trim(master, pad=8)
full_web = full.resize((960, round(full.height * 960 / full.width)), Image.LANCZOS)
full_web.save(OUT / "valtrax-logo.png", optimize=True)
save_webp(full_web, "valtrax-logo.webp")

# --- Horizontal lockup -------------------------------------------------------------
gap_text = 36                       # between VALTRAX and the ENERGY line
text_h = word.height + gap_text + energy.height
text_w = max(word.width, energy.width)
gap_mark = 70                       # between symbol and text block
H = mark.height
lockup = Image.new("RGBA", (mark.width + gap_mark + text_w, H), (0, 0, 0, 0))
lockup.alpha_composite(mark, (0, 0))
tx = mark.width + gap_mark
ty = H - text_h - 8                 # align text block towards the base of the symbol
lockup.alpha_composite(word, (tx + (text_w - word.width) // 2, ty))
lockup.alpha_composite(energy, (tx + (text_w - energy.width) // 2, ty + word.height + gap_text))
lockup = trim(lockup)

# Display height in the header is up to 56px; export at ~3x for sharp rendering.
LOCKUP_H = 168
save_webp(lockup, "valtrax-lockup.webp", LOCKUP_H)
save_webp(reverse(lockup), "valtrax-lockup-light.webp", LOCKUP_H)

# --- Symbol and icons ----------------------------------------------------------------
# (The symbol is only used for the icons below; no separate public file is needed.)


def icon(size: int, bg=(255, 255, 255, 255), inset=0.12) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), bg)
    inner = round(size * (1 - 2 * inset))
    m = mark.copy()
    m.thumbnail((inner, inner), Image.LANCZOS)
    canvas.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    return canvas


icon(180).convert("RGB").save(ROOT / "public" / "apple-touch-icon.png", optimize=True)
ico_src = icon(256, inset=0.06)
ico_src.save(ROOT / "public" / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("lockup aspect", round(lockup.width / lockup.height, 3))
