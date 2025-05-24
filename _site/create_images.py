from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder_image(name, size=(800, 400), bg_color="#f0f0f0", text_color="#666666"):
    """Create a placeholder image with the given name and size."""
    # Create directory if it doesn't exist
    os.makedirs("assets/images", exist_ok=True)
    
    # Create image
    img = Image.new('RGB', size, bg_color)
    draw = ImageDraw.Draw(img)
    
    # Add a border
    border_width = 2
    draw.rectangle(
        [(border_width, border_width), (size[0]-border_width, size[1]-border_width)],
        outline=text_color,
        width=border_width
    )
    
    # Add text
    try:
        font = ImageFont.truetype("Arial", 24)
    except:
        font = ImageFont.load_default()
    
    text = f"{name.replace('-', ' ').title()} Image"
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (size[0] - text_width) // 2
    y = (size[1] - text_height) // 2
    
    draw.text((x, y), text, font=font, fill=text_color)
    
    # Save image
    img.save(f"assets/images/{name}.jpg", quality=95)

def main():
    """Create all missing placeholder images."""
    images = [
        "causal-inference",
        "biostatistics-hero",
        "survival-analysis",
        "cardiology-research",
        "epidemiology-hero",
        "infectious-disease",
        "environmental-health",
        "health-disparities"
    ]
    
    for image in images:
        create_placeholder_image(image)

if __name__ == "__main__":
    main() 