from PIL import Image, ImageDraw, ImageFont
import os

# Create a 1200x600 image with a light blue gradient background
width, height = 1200, 600
image = Image.new('RGB', (width, height), color=(240, 248, 255))
draw = ImageDraw.Draw(image)

# Create a subtle gradient background
for y in range(height):
    # Gradient from light blue to slightly darker blue
    color = (240 - int(y * 30 / height), 248 - int(y * 20 / height), 255)
    draw.line([(0, y), (width, y)], fill=color)

# Add a border
border_width = 4
draw.rectangle([0, 0, width-1, height-1], outline=(100, 150, 200), width=border_width)

# Add text "Hero Image Placeholder"
try:
    # Try to use a standard font
    font = ImageFont.truetype("arial.ttf", 60)
except IOError:
    # Fallback to default font if arial is not available
    font = ImageFont.load_default()

text = "Hero Image Placeholder"
text_width = draw.textlength(text, font=font)
text_height = 60  # Approximate height for the font

# Draw the text in the center of the image
draw.text(
    ((width - text_width) / 2, (height - text_height) / 2),
    text,
    font=font,
    fill=(60, 100, 150)
)

# Add additional decorative elements
# Draw some placeholder image-like elements
draw.rectangle([width/4, height/4, width*3/4, height*3/4], outline=(100, 150, 200), width=2)
draw.line([(width/4, height/4), (width*3/4, height*3/4)], fill=(100, 150, 200), width=2)
draw.line([(width*3/4, height/4), (width/4, height*3/4)], fill=(100, 150, 200), width=2)

# Ensure the assets/images directory exists
os.makedirs('assets/images', exist_ok=True)

# Save the image
image.save('assets/images/hero-placeholder.jpg', 'JPEG', quality=90)
print("Hero image placeholder created at assets/images/hero-placeholder.jpg")

