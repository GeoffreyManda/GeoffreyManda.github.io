import svgwrite
import os

def create_icon(name, color="#000000", size=24):
    """Create a simple iOS-style icon with the given name and color."""
    dwg = svgwrite.Drawing(f"assets/icons/{name}.svg", size=(size, size))
    
    # Add a background rectangle with rounded corners
    dwg.add(dwg.rect(
        insert=(0, 0),
        size=(size, size),
        rx=6,  # corner radius
        ry=6,
        fill="#ffffff",
        stroke=color,
        stroke_width=1.5
    ))
    
    # Add a simple icon shape based on the name
    if "survival" in name:
        # Line graph icon
        points = [(4, 16), (8, 12), (12, 14), (16, 8), (20, 10)]
        dwg.add(dwg.polyline(points, stroke=color, stroke_width=2, fill="none"))
    elif "clinical" in name:
        # Medical cross icon
        dwg.add(dwg.line((8, 12), (16, 12), stroke=color, stroke_width=2))
        dwg.add(dwg.line((12, 8), (12, 16), stroke=color, stroke_width=2))
    elif "cardiology" in name:
        # Heart icon (simplified)
        dwg.add(dwg.circle(center=(8, 12), r=4, fill=color))
        dwg.add(dwg.circle(center=(16, 12), r=4, fill=color))
        dwg.add(dwg.polygon([(12, 4), (4, 12), (12, 20), (20, 12)], fill=color))
    elif "infectious" in name:
        # Virus icon
        dwg.add(dwg.circle(center=(12, 12), r=4, fill=color))
        for angle in [0, 45, 90, 135, 180, 225, 270, 315]:
            x = 12 + 8 * cos(angle * pi / 180)
            y = 12 + 8 * sin(angle * pi / 180)
            dwg.add(dwg.circle(center=(x, y), r=2, fill=color))
    elif "environmental" in name:
        # Leaf icon (simplified)
        dwg.add(dwg.polygon([(12, 4), (4, 12), (12, 20), (20, 12)], fill=color))
    elif "health-disparities" in name:
        # Scale icon
        dwg.add(dwg.line((8, 16), (16, 16), stroke=color, stroke_width=2))
        dwg.add(dwg.line((12, 12), (12, 20), stroke=color, stroke_width=2))
        dwg.add(dwg.circle(center=(8, 12), r=2, fill=color))
        dwg.add(dwg.circle(center=(16, 12), r=2, fill=color))
    elif "research" in name:
        # Microscope icon
        dwg.add(dwg.line((8, 16), (16, 16), stroke=color, stroke_width=2))
        dwg.add(dwg.line((12, 8), (12, 16), stroke=color, stroke_width=2))
        dwg.add(dwg.circle(center=(12, 8), r=3, fill="none", stroke=color, stroke_width=2))
    elif "ai" in name:
        # Neural network icon
        for i in range(3):
            for j in range(3):
                dwg.add(dwg.circle(center=(6 + i*6, 6 + j*6), r=2, fill=color))
        for i in range(2):
            for j in range(3):
                dwg.add(dwg.line((6 + i*6, 6 + j*6), (12 + i*6, 6 + j*6), stroke=color, stroke_width=1))
    elif "policy" in name:
        # Document icon
        dwg.add(dwg.rect(insert=(6, 4), size=(12, 16), rx=1, ry=1, fill="none", stroke=color, stroke_width=2))
        dwg.add(dwg.line((8, 8), (16, 8), stroke=color, stroke_width=2))
        dwg.add(dwg.line((8, 12), (16, 12), stroke=color, stroke_width=2))
        dwg.add(dwg.line((8, 16), (16, 16), stroke=color, stroke_width=2))
    elif "stats" in name:
        # Bar chart icon
        dwg.add(dwg.rect(insert=(6, 14), size=(3, 6), fill=color))
        dwg.add(dwg.rect(insert=(10, 10), size=(3, 10), fill=color))
        dwg.add(dwg.rect(insert=(14, 8), size=(3, 12), fill=color))
    elif "epidemiology" in name:
        # Population icon
        for i in range(3):
            dwg.add(dwg.circle(center=(8 + i*4, 12), r=2, fill=color))
        dwg.add(dwg.line((8, 12), (12, 12), stroke=color, stroke_width=1))
        dwg.add(dwg.line((12, 12), (16, 12), stroke=color, stroke_width=1))
    else:
        # Default icon (circle)
        dwg.add(dwg.circle(center=(12, 12), r=8, fill="none", stroke=color, stroke_width=2))
    
    dwg.save()

def create_social_icons():
    """Create social media icons."""
    icons = {
        "linkedin": [(8, 4), (16, 4), (16, 20), (8, 20), (8, 4), (12, 4), (12, 20), (8, 16), (16, 16)],
        "twitter": [(4, 8), (20, 8), (20, 16), (4, 16), (4, 8), (8, 12), (12, 8), (16, 12), (12, 16)],
        "github": [(4, 4), (20, 4), (20, 20), (4, 20), (4, 4), (8, 8), (16, 8), (12, 12), (8, 16), (16, 16)],
        "researchgate": [(4, 4), (20, 4), (20, 20), (4, 20), (4, 4), (12, 12), (8, 8), (16, 8), (8, 16), (16, 16)],
        "scholar": [(4, 4), (20, 4), (20, 20), (4, 20), (4, 4), (12, 12), (8, 8), (16, 8), (8, 16), (16, 16)],
        "email": [(4, 4), (20, 4), (20, 20), (4, 20), (4, 4), (12, 12), (8, 8), (16, 8), (8, 16), (16, 16)]
    }
    
    for name, points in icons.items():
        dwg = svgwrite.Drawing(f"assets/icons/{name}-icon.svg", size=(24, 24))
        dwg.add(dwg.polygon(points, fill="#000000"))
        dwg.save()

def main():
    """Create all missing icons."""
    # Create directory if it doesn't exist
    os.makedirs("assets/icons", exist_ok=True)
    
    # Create research icons
    icons = [
        "survival-analysis",
        "clinical-trials",
        "cardiology",
        "infectious-disease",
        "environmental-health",
        "health-disparities",
        "research",
        "ai",
        "policy",
        "stats",
        "epidemiology"
    ]
    
    for icon in icons:
        create_icon(icon)
    
    # Create social media icons
    create_social_icons()

if __name__ == "__main__":
    from math import cos, sin, pi
    main() 