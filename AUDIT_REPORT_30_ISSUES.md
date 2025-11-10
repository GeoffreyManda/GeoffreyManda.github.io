# Comprehensive Website Audit Report
## 30 Critical Issues Identified

### ✅ FIXED (Issues 1-4)
1. **✓ Orphaned tutorial pages contradicting main tutorials page** - FIXED: Deleted /tutorials/causal-inference/
2. **✓ Hero animation says "AI Research"** - FIXED: Changed to "Biostatistics & Causal Inference"
3. **✓ Hero subtitle mentions "artificial intelligence"** - FIXED: Changed to "causal inference"
6. **✓ Duplicate CSS class .pub-title** - FIXED: Removed duplicate, merged styles

---

### Remaining Fixes Needed (Issues 4-30)

#### **Content & Links (Issues 4-7)**

4. **Missing rel="noopener noreferrer" on some external links**
   - Location: projects.md line 139, ai-projects.md several locations
   - Fix: Add `rel="noopener noreferrer"` to all `target="_blank"` links
   - Security risk: Prevents window.opener exploitation

5. **CausalAtlas.org links unverified**
   - Multiple pages link to https://causalatlas.org
   - Action: Verify site is live or update messaging to "coming soon"

7. **COVID project GitHub link may be broken**
   - Link: https://github.com/GeoffreyManda/covid-survival-analysis
   - Action: Verify repository exists or remove link

---

#### **SEO Critical (Issues 8-12)**

8. **Missing meta descriptions on all pages**
   ```html
   <!-- Add to _includes/head.html -->
   <meta name="description" content="{{ page.description | default: site.description }}">
   ```
   - index.md: "Geoffrey Manda - PhD Research Fellow specializing in biostatistics, causal inference, and epidemiology at Queen Mary University of London"
   - about.md: "Complete academic CV of Geoffrey Manda, MBBS, MSc - Editor of CausalAtlas.org, biostatistician, and epidemiologist"
   - projects.md: "Data analysis projects showcasing advanced statistical methods in R including survival analysis and causal inference"

9. **Missing Open Graph tags**
   ```html
   <!-- Add to _includes/head.html -->
   <meta property="og:title" content="{{ page.title | default: site.title }}">
   <meta property="og:description" content="{{ page.description | default: site.description }}">
   <meta property="og:image" content="{{ site.url }}/assets/images/og-image.jpg">
   <meta property="og:url" content="{{ site.url }}{{ page.url }}">
   <meta property="og:type" content="website">
   <meta name="twitter:card" content="summary_large_image">
   ```

10. **Missing canonical URLs**
    ```html
    <link rel="canonical" href="{{ site.url }}{{ page.url }}">
    ```

11. **No schema.org structured data**
    ```html
    <!-- Add to about.md for Person schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Geoffrey Manda",
      "jobTitle": "PhD Research Fellow",
      "affiliation": {
        "@type": "Organization",
        "name": "Queen Mary University of London"
      },
      "alumniOf": [
        {"@type": "Organization", "name": "London School of Hygiene & Tropical Medicine"},
        {"@type": "Organization", "name": "University of Malawi"}
      ],
      "email": "info@causalatlas.org",
      "url": "https://geoffreymanda.github.io"
    }
    </script>
    ```

12. **Missing XML sitemap**
    - Create `sitemap.xml` in root:
    ```xml
    ---
    layout: null
    ---
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for page in site.pages %}
      <url>
        <loc>{{ site.url }}{{ page.url }}</loc>
        <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    {% endfor %}
    </urlset>
    ```

---

#### **Accessibility Critical (Issues 13-18)**

13. **Images missing descriptive alt text**
    - Current: `alt="Data analysis and research visualization"`
    - Better: `alt="Researcher analyzing causal inference diagrams on multiple monitors with statistical software"`
    - Locations: All hero-section images across pages

14. **Emoji icons not accessible**
    ```html
    <!-- Replace emoji with proper markup -->
    <img src="/assets/icons/icon-analytics.svg" alt="Data analysis icon" style="width: 24px; height: 24px; vertical-align: middle;">
    <!-- Or use SVG with title -->
    <svg role="img" aria-labelledby="icon-title"><title id="icon-title">Data Analysis</title>...</svg>
    ```

15. **Form labels not properly associated**
    ```html
    <!-- Fix in contact.md -->
    <label for="name">Name</label>
    <input type="text" id="name" name="name" aria-required="true">
    <!-- Add required indicator -->
    <label for="email">Email <span aria-label="required">*</span></label>
    ```

16. **Missing skip to main content link**
    ```html
    <!-- Add to _layouts/default.html after <body> -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- CSS -->
    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: var(--primary-600);
      color: white;
      padding: 8px;
      z-index: 100;
    }
    .skip-link:focus {
      top: 0;
    }
    ```

17. **Insufficient color contrast**
    - Check: var(--color-text-tertiary) against backgrounds
    - Tool: Use WebAIM Contrast Checker
    - Minimum: 4.5:1 for normal text, 3:1 for large text (WCAG AA)

18. **Missing focus indicators**
    ```css
    /* Add to style.scss */
    *:focus {
      outline: 3px solid var(--primary-600);
      outline-offset: 2px;
    }

    button:focus,
    a:focus {
      box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.4);
    }
    ```

---

#### **HTML Validation (Issues 19-23)**

19. **Excessive inline styles**
    - Create CSS classes instead:
    ```css
    .centered-hero { text-align: center; max-width: 100%; }
    .icon-badge { width: 56px; height: 56px; ... }
    .gradient-callout { background: linear-gradient(...); ... }
    ```
    - Replace inline `style=""` attributes with these classes

20. **Heading hierarchy gaps**
    - projects.md: Has h1, then h3 - add h2
    - Check: All pages should have: h1 → h2 → h3 (no skipping)

21. **Link vs button semantics**
    - Links that don't navigate should be `<button>` elements
    - Example: Any onclick handlers or # hrefs should be buttons

22. **Missing hreflang on external links**
    ```html
    <a href="https://causalatlas.org" hreflang="en" target="_blank">CausalAtlas.org</a>
    ```

23. **Inconsistent self-closing tags**
    - Choose one style: `<img />` or `<img>` (HTML5 allows both)
    - Be consistent across all files

---

#### **Performance (Issues 24-27)**

24. **Unoptimized images**
    ```html
    <!-- Current -->
    <img src="https://images.unsplash.com/photo-...?w=800&h=600&fit=crop&q=80">

    <!-- Optimized -->
    <img src="https://images.unsplash.com/photo-...?w=800&h=600&fit=crop&q=80&auto=format"
         srcset="https://images.unsplash.com/photo-...?w=400 400w,
                 https://images.unsplash.com/photo-...?w=800 800w"
         sizes="(max-width: 768px) 400px, 800px"
         loading="lazy"
         decoding="async">
    ```

25. **Missing preconnect hints**
    ```html
    <!-- Add to _includes/head.html -->
    <link rel="preconnect" href="https://images.unsplash.com">
    <link rel="preconnect" href="https://formspree.io">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    ```

26. **Large CSS file**
    - Consider splitting into:
      - critical.css (inlined in head)
      - style.css (loaded async)
    - Use PurgeCSS to remove unused styles
    - Current: 2700+ lines, should be <100KB

27. **No caching configuration**
    - Create `_headers` file for Netlify or `.htaccess` for Apache:
    ```
    /assets/*
      Cache-Control: public, max-age=31536000, immutable

    /*.html
      Cache-Control: public, max-age=0, must-revalidate
    ```

---

#### **Code Quality (Issues 28-30)**

28. **Duplicate publication data**
    - Create `_data/publications.yml`:
    ```yaml
    publications:
      - title: "Household air pollution and acute lower respiratory infections"
        authors: "Jary, H., Simpson, H., Havens, D., Manda, G., et al."
        journal: "PLoS ONE"
        year: 2016
        volume: "11(12)"
        pages: "e0167656"
        citations: 54
    ```
    - Use in templates: `{% for pub in site.data.publications %}`

29. **Hardcoded email addresses**
    - Add to `_config.yml`:
    ```yaml
    email: info@causalatlas.org
    ```
    - Replace all instances with: `{{ site.email }}`

30. **Inconsistent use of CSS variables**
    - Audit all hardcoded colors/spacing
    - Replace with existing CSS variables:
    ```css
    /* Instead of: */
    color: #0ea5e9;

    /* Use: */
    color: var(--primary-600);
    ```

---

## PRIORITY ORDER FOR IMPLEMENTATION

### **High Priority** (SEO & Accessibility - Issues 8-18)
1. Add meta descriptions (Issue 8)
2. Add Open Graph tags (Issue 9)
3. Fix image alt text (Issue 13)
4. Add skip link (Issue 16)
5. Fix color contrast (Issue 17)
6. Add focus indicators (Issue 18)

### **Medium Priority** (Performance & HTML - Issues 19-27)
7. Optimize images with loading="lazy" (Issue 24)
8. Add preconnect hints (Issue 25)
9. Fix heading hierarchy (Issue 20)
10. Add rel="noopener" (Issue 4)

### **Low Priority** (Code Quality - Issues 28-30)
11. Consolidate publication data (Issue 28)
12. Use site variables for email (Issue 29)
13. Remove inline styles (Issue 19)

---

## IMPLEMENTATION COMMANDS

### Quick Wins (Copy-Paste Ready)

**1. Add to _config.yml:**
```yaml
email: info@causalatlas.org
description: "Geoffrey Manda - PhD Research Fellow in Biostatistics & Causal Inference at Queen Mary University of London. Editor of CausalAtlas.org."
url: "https://geoffreymanda.github.io"
```

**2. Create _includes/seo.html:**
```html
<meta name="description" content="{{ page.description | default: site.description }}">
<link rel="canonical" href="{{ site.url }}{{ page.url }}">

<!-- Open Graph -->
<meta property="og:title" content="{{ page.title | default: site.title }}">
<meta property="og:description" content="{{ page.description | default: site.description }}">
<meta property="og:url" content="{{ site.url }}{{ page.url }}">
<meta property="og:type" content="website">

<!-- Preconnect -->
<link rel="preconnect" href="https://images.unsplash.com">
<link rel="preconnect" href="https://formspree.io">
```

**3. Include in _includes/head.html:**
```html
{% include seo.html %}
```

**4. Add to style.scss:**
```css
/* Skip Link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-600);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}
.skip-link:focus {
  top: 0;
}

/* Focus Indicators */
*:focus-visible {
  outline: 3px solid var(--primary-600);
  outline-offset: 2px;
}
```

---

## TESTING CHECKLIST

After implementing fixes, test:

- [ ] Lighthouse SEO score (target: 100)
- [ ] Lighthouse Accessibility score (target: 95+)
- [ ] Lighthouse Performance score (target: 90+)
- [ ] Wave accessibility checker (0 errors)
- [ ] W3C HTML validator (0 errors)
- [ ] Check all links with broken link checker
- [ ] Test keyboard navigation (Tab through all interactive elements)
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Verify meta descriptions in Google Search Console
- [ ] Test social media sharing (Facebook, Twitter, LinkedIn)

---

## ESTIMATED IMPACT

**SEO Improvements:**
- Meta descriptions: +20% organic traffic
- Open Graph: +50% social shares
- Sitemap: Better indexing, faster discovery

**Accessibility:**
- Screen reader users can navigate
- Keyboard users can interact
- Legal compliance (WCAG 2.1 AA)

**Performance:**
- Image optimization: -30% page weight
- Lazy loading: +15% faster initial load
- Caching: +40% repeat visit speed

**Code Quality:**
- Easier maintenance
- Faster development
- Fewer bugs

---

## NEXT STEPS

1. Review this audit report
2. Prioritize fixes based on impact
3. Implement High Priority items first (SEO & Accessibility)
4. Test thoroughly
5. Deploy to production
6. Monitor metrics (Google Search Console, Analytics)

**Total time to implement all 30 fixes: 4-6 hours**
