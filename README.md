# Geoffrey Manda - Professional Portfolio

This repository contains the source code for my professional portfolio website, hosted on GitHub Pages. The site features a commanding black/orange/purple design with 3D effects, parallax scrolling, and premium animations.

## Features

- World-class design with 3D card effects and parallax scrolling
- Functional dark mode with localStorage persistence
- Full SEO optimization (Open Graph, Twitter Cards, Schema.org)
- WCAG 2.1 AA accessibility compliance
- Premium glassmorphism and animated backgrounds
- Interactive cursor glow and micro-interactions
- Responsive design optimized for all devices

## Technologies Used

- **GitHub Pages**: Hosting platform
- **Jekyll 4.3+**: Static site generator
- **Minima Theme**: Base Jekyll theme (customized)
- **Markdown**: Content formatting
- **SCSS**: Advanced styling
- **Vanilla JavaScript**: Interactive features
- **D3.js**: Data visualizations

## Local Development Setup

### Prerequisites

Before you begin, ensure you have the following installed:

1. **Ruby** (version 2.7.0 or higher)
   ```bash
   ruby --version
   ```

2. **RubyGems** (usually comes with Ruby)
   ```bash
   gem --version
   ```

3. **Bundler**
   ```bash
   gem install bundler
   ```

4. **Git**
   ```bash
   git --version
   ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GeoffreyManda/GeoffreyManda.github.io.git
   cd GeoffreyManda.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

   If you encounter permission errors, use:
   ```bash
   bundle install --path vendor/bundle
   ```

### Running the Site Locally

**Standard development server:**
```bash
bundle exec jekyll serve
```

**With live reload (recommended for development):**
```bash
bundle exec jekyll serve --livereload
```

**With draft posts visible:**
```bash
bundle exec jekyll serve --livereload --drafts
```

**On a different port:**
```bash
bundle exec jekyll serve --port 4001
```

**With incremental builds (faster):**
```bash
bundle exec jekyll serve --livereload --incremental
```

The site will be available at: `http://localhost:4000`

### Building for Production

**Build the site:**
```bash
bundle exec jekyll build
```

**Build with production environment:**
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be in the `_site/` directory.

### Testing

**1. Check for broken links and HTML issues:**
```bash
bundle exec jekyll build
bundle exec htmlproofer ./_site --disable-external
```

**2. Test accessibility:**
- Open the site in your browser
- Use browser DevTools Lighthouse audit
- Or use: https://wave.webaim.org/

**3. Test dark mode:**
- Click the theme toggle button (bottom-right)
- Verify localStorage persistence (refresh page)
- Check both light and dark mode contrast

**4. Test responsive design:**
```bash
# Desktop
Open http://localhost:4000

# Mobile simulation
Use browser DevTools (F12) > Toggle device toolbar
```

**5. Test 3D effects:**
- Hover over cards to see 3D tilt
- Move cursor to see interactive glow
- Scroll to experience parallax effects

### Updating Dependencies

**Update all gems:**
```bash
bundle update
```

**Update specific gem:**
```bash
bundle update jekyll
```

**Check for outdated gems:**
```bash
bundle outdated
```

## Project Structure

```
.
├── _config.yml           # Jekyll configuration
├── _layouts/             # HTML layouts
│   ├── default.html      # Main layout with header/footer
│   └── home.html         # Home page layout
├── _includes/            # Reusable components
│   ├── head.html         # SEO, meta tags, CSS
│   ├── header.html       # Navigation
│   ├── footer.html       # Footer
│   ├── dark-mode-toggle.html  # Theme switcher
│   └── hero-animation.html    # Animated hero section
├── assets/
│   ├── css/
│   │   ├── style.scss    # Main styles (3,300+ lines)
│   │   └── hero-animations.css  # Animation effects
│   ├── js/
│   │   └── main.js       # Interactive features
│   ├── icons/            # SVG icons (45+ files)
│   └── images/           # Image assets
├── *.md                  # Content pages
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## Common Issues & Solutions

### Issue: `cannot load such file -- webrick`
**Solution:**
```bash
bundle add webrick
```

### Issue: Permission denied
**Solution:**
```bash
bundle install --path vendor/bundle
```

### Issue: Port 4000 already in use
**Solution:**
```bash
# Find and kill the process
lsof -ti:4000 | xargs kill -9

# Or use a different port
bundle exec jekyll serve --port 4001
```

### Issue: Changes not reflected
**Solution:**
```bash
# Clear Jekyll cache
bundle exec jekyll clean

# Rebuild
bundle exec jekyll serve --livereload
```

### Issue: CSS/JS not updating
**Solution:**
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check browser DevTools Console for errors

## Performance Testing

**Google Lighthouse:**
```bash
# Install lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:4000 --view
```

**Expected Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Design System

**Colors:**
- Primary (Orange): #f26419
- Secondary (Purple): #9333ea
- Neutrals: #0a0a0a to #fafafa

**Typography:**
- Headings: SF Pro Display
- Body: SF Pro Text
- Code: SF Mono

**Spacing:**
- Base unit: 0.25rem
- Scale: 1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32...

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal portfolio site, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

The content of this website is licensed under a [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

Code is available for reference and learning purposes.

## Contact

- GitHub: [@GeoffreyManda](https://github.com/GeoffreyManda)
- LinkedIn: [geoffreymanda](https://www.linkedin.com/in/geoffreymanda/)
- Google Scholar: [Geoffrey Manda](https://scholar.google.com/citations?user=7-Sy11kAAAAJ)

For questions about this website, please [open an issue](https://github.com/GeoffreyManda/GeoffreyManda.github.io/issues).

---

**Built with Jekyll. Deployed on GitHub Pages. Designed with precision.**
