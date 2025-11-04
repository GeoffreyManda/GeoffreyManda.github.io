---
layout: page
title: Contact
permalink: /contact/
description: Get in touch with Geoffrey Manda for biostatistical consulting, research collaboration, or speaking engagements. Available for causal inference projects and clinical trial analysis.
---

<style>
/* Hide page title */
.page-heading,
.page-content > h1:first-of-type,
header.post-header,
.post-title {
  display: none !important;
}

.hero-section-contact {
  background: #000000;
  padding: 6rem 2rem;
  margin: -2rem -2rem 3rem -2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: calc(100% + 4rem);
}

.hero-section-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(0, 113, 227, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.hero-title-contact {
  color: #ffffff !important;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -1px;
  margin: 0;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .hero-section-contact {
    padding: 4rem 1.5rem;
  }

  .hero-title-contact {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title-contact {
    font-size: 2rem;
  }
}
</style>

<div class="hero-section-contact">
  <h1 class="hero-title-contact">Let's Talk</h1>
</div>

<div class="container-narrow">
  <section>
    <div class="contact-form-container">
      <h2>Send a Message</h2>
      <p>Get in touch about potential collaborations, speaking engagements, or research opportunities.</p>

      <form class="contact-form" id="contact-form" action="https://formspree.io/f/xyzbqaap" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="_replyto" placeholder="your.email@example.com" required>
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="_subject" placeholder="Research collaboration, consulting, etc." required>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Tell me about your project or inquiry..." required></textarea>
        </div>

        <input type="hidden" name="_next" value="https://geoffreymanda.github.io/contact?submitted=true">
        <input type="text" name="_gotcha" style="display: none;">

        <button type="submit" class="submit-button">Send Message</button>
      </form>

      <div id="form-status"></div>
    </div>
  </section>

</div>

<style>
/* Contact Form Styling */
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 500;
  color: #1d1d1f;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d1d6;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  background: #ffffff;
  color: #1d1d1f;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0071e3;
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

input[name="_gotcha"] {
  display: none;
}

.submit-button {
  width: 100%;
  padding: 14px 24px;
  background: #0071e3;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.submit-button:hover {
  background: #0077ed;
}

.submit-button:disabled {
  background: #d1d1d6;
  cursor: not-allowed;
}

#form-status {
  margin-top: 1rem;
  padding: 12px 16px;
  border-radius: 8px;
  display: none;
}

#form-status.success {
  background: #f0fdf4;
  border: 1px solid #86efac;
  color: #166534;
  display: block;
}

#form-status.error {
  background: #fef2f2;
  border: 1px solid #fca5a5;
  color: #991b1b;
  display: block;
}

/* Connect Section */
.connect-section {
  margin-top: 4rem;
  text-align: center;
}

.social-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: #f5f5f7;
  border: 1px solid #d1d1d6;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: #0071e3;
  border-color: #0071e3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 113, 227, 0.2);
}

.link-label {
  color: #1d1d1f;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.social-link:hover .link-label {
  color: #ffffff;
}

.link-arrow {
  color: #86868b;
  font-size: 1.25rem;
  font-weight: 400;
  transition: all 0.2s ease;
}

.social-link:hover .link-arrow {
  color: #ffffff;
  transform: translateX(4px);
}

.direct-contact {
  margin-top: 3rem;
  padding: 2rem;
  background: #f5f5f7;
  border-radius: 12px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-email {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0071e3;
  margin: 0;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
}

@media (max-width: 768px) {
  .social-links-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Check if form was just submitted (from redirect)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('submitted') === 'true') {
    const statusDiv = document.getElementById('form-status');
    statusDiv.style.display = 'block';
    statusDiv.className = 'success';
    statusDiv.innerHTML = '✓ Thank you! Your message has been sent successfully. I\'ll get back to you soon.';

    // Remove the query parameter
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Handle form submission
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const submitBtn = form.querySelector('.submit-button');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    });
  }
});
</script>
