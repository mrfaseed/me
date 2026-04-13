import os

base_path = os.path.dirname(os.path.abspath(__file__))
src = os.path.join(base_path, "code.html")

with open(src, "r", encoding="utf-8") as f:
    orig = f.read()

# Each variant: (filename, primary_hex, primary_rgb, secondary_hex, secondary_rgb, accent_hex, accent_rgb)
variants = [
    {
        "file": "code_cyberpunk.html",
        "primary":   ("#06b6d4", "6, 182, 212"),
        "secondary": ("#d946ef", "217, 70, 239"),
        "accent":    ("#eab308", "234, 179, 8"),
    },
    {
        "file": "code_sunset.html",
        "primary":   ("#ef4444", "239, 68, 68"),
        "secondary": ("#f97316", "249, 115, 22"),
        "accent":    ("#f59e0b", "245, 158, 11"),
    },
    {
        "file": "code_ocean.html",
        "primary":   ("#3b82f6", "59, 130, 246"),
        "secondary": ("#14b8a6", "20, 184, 166"),
        "accent":    ("#a855f7", "168, 85, 247"),
    },
]

# Original values to replace
ORIG_PRIMARY_HEX = "#6366f1"
ORIG_PRIMARY_RGB = "99, 102, 241"
ORIG_SECONDARY_HEX = "#8b5cf6"
ORIG_SECONDARY_RGB = "139, 92, 246"
ORIG_ACCENT_HEX = "#06b6d4"
ORIG_ACCENT_RGB = "6, 182, 212"

for v in variants:
    content = orig
    content = content.replace(ORIG_PRIMARY_HEX, v["primary"][0])
    content = content.replace(ORIG_PRIMARY_RGB, v["primary"][1])
    content = content.replace(ORIG_SECONDARY_HEX, v["secondary"][0])
    content = content.replace(ORIG_SECONDARY_RGB, v["secondary"][1])
    content = content.replace(ORIG_ACCENT_HEX, v["accent"][0])
    content = content.replace(ORIG_ACCENT_RGB, v["accent"][1])

    out_path = os.path.join(base_path, v["file"])
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Created:", v["file"])

print("Done! All variants generated.")
