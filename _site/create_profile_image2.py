from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random
import os

# Set dimensions for the image
width, height = 500, 500

# Create a new image with a white background
img = Image.new('RGB', (width, height), color='white')
draw = ImageDraw.Draw(img)

# Draw a gradient background
for y in range(height):
    r = int(44 + (y / height) * 30)
    g = int(62 + (y / height) * 50)
    b = int(80 + (y / height) * 70)
    for x in range(width):
        draw.point((x, y), fill=(r, g, b))

# Create a circular mask for the profile
mask = Image.new('L', (width, height), 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.ellipse((50, 50, width-50, height-50), fill=255)

# Draw a professional silhouette
silhouette = Image.new('RGBA', (width, height), (0, 0, 0, 0))
silhouette_draw = ImageDraw.Draw(silhouette)

# Draw head
head_color = (240, 240, 240)
silhouette_draw.ellipse((150, 100, 350, 300), fill=head_color)

# Draw body (shoulders and upper torso)
silhouette_draw.polygon([(150, 250), (150, 400), (350, 400), (350, 250)], fill=head_color)

# Apply a subtle shadow
shadow = Image.new('RGBA', (width, height), (0, 0, 0, 0))
shadow_draw = ImageDraw.Draw(shadow)
shadow_draw.ellipse((155, 105, 355, 305), fill=(20, 20, 20, 100))
shadow_draw.polygon([(155, 255), (155, 405), (355, 405), (355, 255)], fill=(20, 20, 20, 100))
shadow = shadow.filter(ImageFilter.GaussianBlur(10))

# Composite the images
img.paste(shadow, (0, 0), shadow)
img.paste(silhouette, (0, 0), silhouette)

# Apply the circular mask to get a round profile
circular_img = Image.new('RGB', (width, height), (255, 255, 255))
circular_img.paste(img, (0, 0), mask)

# Draw a border around the circle
border_img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
border_draw = ImageDraw.Draw(border_img)
border_draw.ellipse((48, 48, width-48, height-48), outline=(255, 255, 255), width=4)

# Composite the border
circular_img.paste(border_img, (0, 0), border_img)

# Add a subtle drop shadow
shadow_offset = 5
shadow_img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
shadow_draw = ImageDraw.Draw(shadow_img)
shadow_draw.ellipse((50+shadow_offset, 50+shadow_offset, width-50+shadow_offset, height-50+shadow_offset), 
                   fill=(0, 0, 0, 80))
shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(10))

# Create the final image
final_img = Image.new('RGB', (width, height), color='white')
final_img.paste(shadow_img, (0, 0), shadow_img)
final_img.paste(circular_img, (0, 0))

# Save the image
final_img.save('profile-image.jpg', quality=95)

print("Professional profile image created successfully as 'profile-image.jpg'")

