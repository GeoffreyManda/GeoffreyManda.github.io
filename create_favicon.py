#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

def create_favicon():
    # Create multiple sizes for the favicon
    sizes = [16, 32, 48, 64]
    images = []
    
    for size in sizes:
        # Create a new image with a transparent background
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Calculate center and radius of the circle
        center = size // 2
        radius = (size // 2) - 1
        
        # Draw a filled circle as the background
        draw.ellipse([(center - radius, center - radius), 
                      (center + radius, center + radius)], 
                      fill=(41, 128, 185))  # Professional blue color
        
        # For sizes 32 and larger, add a simple design element
        if size >= 32:
            # Draw a smaller lighter circle inside
            inner_radius = radius // 2
            draw.ellipse([(center - inner_radius, center - inner_radius), 
                          (center + inner_radius, center + inner_radius)], 
                          fill=(52, 152, 219))  # Lighter blue
            
        images.append(img)
    
    # Save the favicon.ico file with all sizes
    images[0].save('favicon.ico', 
                   format='ICO', 
                   sizes=[(size, size) for size in sizes],
                   append_images=images[1:])
    
    print(f"Favicon created successfully at {os.path.abspath('favicon.ico')}")

if __name__ == "__main__":
    create_favicon()

#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

def create_favicon():
    """
    Create a simple favicon.ico file with the letter 'G' for Geoffrey.
    The favicon will have a dark background with a light colored letter.
    """
    # Create sizes for the favicon (16x16, 32x32, 48x48)
    sizes = [16, 32, 48]
    images = []
    
    # Define colors
    background_color = (25, 55, 125)  # Dark blue
    letter_color = (255, 255, 255)    # White
    
    for size in sizes:
        # Create a new image with a colored background
        img = Image.new('RGB', (size, size), background_color)
        draw = ImageDraw.Draw(img)
        
        # Try to use a system font, or fall back to default
        try:
            # Adjust font size based on image size
            font_size = int(size * 0.75)
            font = ImageFont.truetype("Arial", font_size)
        except IOError:
            # If the font isn't available, use the default
            font = ImageFont.load_default()
        
        # Calculate position to center the letter
        letter = "G"
        try:
            # For newer versions of Pillow
            left, top, right, bottom = draw.textbbox((0, 0), letter, font=font)
            text_width = right - left
            text_height = bottom - top
        except AttributeError:
            # For older versions of Pillow
            text_width, text_height = draw.textsize(letter, font=font)
        
        position = ((size - text_width) // 2, (size - text_height) // 2 - int(size * 0.05))
        
        # Draw the letter
        draw.text(position, letter, letter_color, font=font)
        
        # Add to list of images
        images.append(img)
    
    # Save the favicon
    images[0].save(
        "favicon.ico",
        format="ICO",
        sizes=[(size, size) for size in sizes],
        append_images=images[1:]
    )
    
    print(f"Favicon created at {os.path.abspath('favicon.ico')}")

if __name__ == "__main__":
    create_favicon()

