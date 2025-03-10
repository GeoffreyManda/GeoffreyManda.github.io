from PIL import Image, ImageDraw, ImageFont
import os
import random
import math

# Create directory if it doesn't exist
os.makedirs("ai-projects/assets/images", exist_ok=True)

# Create a new image with white background
width, height = 800, 400
img = Image.new('RGB', (width, height), color=(240, 240, 245))
draw = ImageDraw.Draw(img)

# Draw title text
title_font_size = 36
try:
    title_font = ImageFont.truetype("arial.ttf", title_font_size)
except IOError:
    title_font = ImageFont.load_default()

title_text = "AI Project"
def get_text_dimensions(text, font):
    # Use textbbox method for newer Pillow versions
    if hasattr(font, 'getbbox'):  # Pillow >= 9.2.0
        bbox = font.getbbox(text)
        return bbox[2] - bbox[0], bbox[3] - bbox[1]
    # Use textbbox for Pillow >= 8.0.0
    elif hasattr(draw, 'textbbox'):
        bbox = draw.textbbox((0, 0), text, font=font)
        return bbox[2] - bbox[0], bbox[3] - bbox[1]
    # Fallback to older methods for compatibility
    elif hasattr(draw, 'textsize'):
        return draw.textsize(text, font=font)
    else:
        return font.getsize(text)

text_width, text_height = get_text_dimensions(title_text, title_font)
text_position = ((width - text_width) // 2, 30)
draw.text(text_position, title_text, fill=(30, 50, 100), font=title_font)

# Draw neural network elements
def draw_neural_network():
    # Draw nodes and connections for a neural network
    layers = [4, 6, 6, 3]  # Nodes per layer
    layer_positions = []
    node_radius = 12
    
    # Calculate positions for all nodes
    for layer_idx, node_count in enumerate(layers):
        layer_x = 150 + (width - 300) * layer_idx / (len(layers) - 1)
        nodes = []
        for node_idx in range(node_count):
            spacing = height / (node_count + 1)
            node_y = spacing * (node_idx + 1)
            nodes.append((layer_x, node_y))
        layer_positions.append(nodes)
    
    # Draw connections between layers
    for layer_idx in range(len(layers) - 1):
        for source_node in layer_positions[layer_idx]:
            for target_node in layer_positions[layer_idx + 1]:
                # Vary connection opacity to create visual interest
                opacity = random.randint(20, 80)
                draw.line([source_node, target_node], fill=(100, 100, 220, opacity), width=1)
    
    # Draw nodes
    for layer in layer_positions:
        for node in layer:
            x, y = node
            color_r = random.randint(30, 100)
            color_g = random.randint(100, 180)
            color_b = random.randint(200, 255)
            draw.ellipse((x - node_radius, y - node_radius, x + node_radius, y + node_radius), 
                         fill=(color_r, color_g, color_b), outline=(30, 50, 100))

# Draw data visualization elements
def draw_data_viz():
    # Draw scatter plot points
    for _ in range(40):
        x = random.randint(550, 750)
        y = random.randint(230, 350)
        size = random.randint(3, 8)
        color_r = random.randint(50, 200)
        color_g = random.randint(50, 100)
        color_b = random.randint(150, 255)
        draw.ellipse((x - size, y - size, x + size, y + size), 
                     fill=(color_r, color_g, color_b))

    # Draw some coordinate axes
    draw.line([(550, 350), (550, 230)], fill=(50, 50, 50), width=2)  # Y-axis
    draw.line([(550, 350), (750, 350)], fill=(50, 50, 50), width=2)  # X-axis

# Draw some code-like elements
def draw_code_elements():
    # Draw code-like blocks
    code_x = 80
    code_y = 260
    line_height = 18
    
    for i in range(6):
        # Simulate code indentation and syntax
        indent = random.randint(0, 2) * 20
        line_width = random.randint(10, 15) * 10
        draw.rectangle((code_x + indent, code_y + i * line_height, 
                       code_x + indent + line_width, code_y + i * line_height + 10), 
                       fill=(80, 80, 80))

# Call the drawing functions
draw_neural_network()
draw_data_viz()
draw_code_elements()

# Add a subtle grid background
for x in range(0, width, 20):
    draw.line([(x, 0), (x, height)], fill=(220, 220, 225), width=1)
for y in range(0, height, 20):
    draw.line([(0, y), (width, y)], fill=(220, 220, 225), width=1)

# Add a subtle border
draw.rectangle([(0, 0), (width-1, height-1)], outline=(200, 200, 210), width=2)

# Save the image
img.save("ai-projects/assets/images/ai-project-placeholder.jpg")

print("AI project placeholder image created successfully!")

