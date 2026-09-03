import os
from PIL import Image

input_path = r"C:\Users\hp\.gemini\antigravity-ide\brain\c013044d-27a9-4db8-a2d8-194fe7ea36ea\.user_uploaded\media_1788428461523.png"
output_dir = r"c:\Users\hp\Desktop\nexGen\assets\images"
os.makedirs(output_dir, exist_ok=True)

img = Image.open(input_path).convert("RGBA")
width, height = img.size

# Find bounding box of non-white pixels
# White threshold: R > 240 and G > 240 and B > 240
min_x, min_y, max_x, max_y = width, height, 0, 0

for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        # If not white
        if not (r > 240 and g > 240 and b > 240):
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

# Crop to bounding box with 4px padding
padding = 4
min_x = max(0, min_x - padding)
min_y = max(0, min_y - padding)
max_x = min(width - 1, max_x + padding)
max_y = min(height - 1, max_y + padding)

cropped = img.crop((min_x, min_y, max_x + 1, max_y + 1))
cw, ch = cropped.size

# Create transparent version
transparent_img = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
# Create white text version (for dark surfaces)
white_nex_img = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))

for y in range(ch):
    for x in range(cw):
        r, g, b, a = cropped.getpixel((x, y))
        if r > 242 and g > 242 and b > 242:
            # White background -> transparent
            transparent_img.putpixel((x, y), (0, 0, 0, 0))
            white_nex_img.putpixel((x, y), (0, 0, 0, 0))
        else:
            # Alpha feathering for clean edges
            brightness = (r + g + b) / 3.0
            if brightness > 220:
                alpha = int(255 * (245 - brightness) / 25.0)
                alpha = max(0, min(255, alpha))
            else:
                alpha = 255
            
            transparent_img.putpixel((x, y), (r, g, b, alpha))
            
            # If color is navy blue (R < 100, B > R and G < 100) -> turn white
            # If color is red (R > 150, G < 100, B < 100) -> keep red
            if r > 130 and g < 70 and b < 70:
                # Keep Red
                white_nex_img.putpixel((x, y), (r, g, b, alpha))
            else:
                # Navy -> White
                white_nex_img.putpixel((x, y), (255, 255, 255, alpha))

out_dark = os.path.join(output_dir, "nexgen-wordmark.png")
out_light = os.path.join(output_dir, "nexgen-wordmark-light.png")

transparent_img.save(out_dark, "PNG")
white_nex_img.save(out_light, "PNG")
print("Saved:", out_dark, out_light)
