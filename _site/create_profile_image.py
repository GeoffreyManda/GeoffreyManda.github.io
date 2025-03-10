from PIL import Image, ImageDraw

# Create a new image with a light background
width, height = 300, 300
background_color = (240, 240, 240)  # Light gray background
image = Image.new('RGB', (width, height), background_color)
draw = ImageDraw.Draw(image)

# Colors
silhouette_color = (80, 80, 80)  # Dark gray for the silhouette
accent_color = (200, 200, 200)  # Lighter gray for accent

# Draw a circular background for the head
circle_x, circle_y = width // 2, height // 2 - 20
circle_radius = 80
draw.ellipse(
    (circle_x - circle_radius, circle_y - circle_radius, 
     circle_x + circle_radius, circle_y + circle_radius),
    fill=accent_color
)

# Draw the head/silhouette
head_width = 70
head_height = 80
head_x = width // 2 - head_width // 2
head_y = height // 2 - 60
draw.ellipse(
    (head_x, head_y, head_x + head_width, head_y + head_height),
    fill=silhouette_color
)

# Draw the body/shoulders
shoulder_width = 140
shoulder_height = 100
shoulder_x = width // 2 - shoulder_width // 2
shoulder_y = height // 2 + 20
draw.ellipse(
    (shoulder_x, shoulder_y, shoulder_x + shoulder_width, shoulder_y + shoulder_height),
    fill=silhouette_color
)

# Save the image
image.save('profile-placeholder.jpg', quality=95)
print("Profile placeholder image 'profile-placeholder.jpg' created successfully.")

