# Contact Form Setup Guide

Your contact form is currently configured to use **Formspree** (free, open-source friendly service).

## Current Setup: Formspree

The form is working with a Formspree endpoint. Submissions go directly to `info@causalatlas.org`.

**How it works:**
1. User fills out the form
2. Form submits to Formspree
3. Formspree sends email to info@causalatlas.org
4. User sees success message
5. You receive email notification

**No setup required** - it's ready to use!

---

## Alternative Option 1: Google Forms (Easiest)

If you prefer Google Forms for better organization and automatic Google Sheets storage:

### Step 1: Create Google Form
1. Go to https://forms.google.com
2. Create new form with fields:
   - Name (Short answer)
   - Email (Short answer)
   - Subject (Short answer)
   - Message (Paragraph)
3. Click "Send" → Get embed code

### Step 2: Replace Form in contact.md
Replace the current `<form>` section with:

```html
<iframe
  src="YOUR_GOOGLE_FORM_EMBED_URL"
  width="100%"
  height="800"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  style="border-radius: 16px; box-shadow: 0 8px 32px rgba(31, 38, 135, 0.12);">
  Loading…
</iframe>
```

**Benefits:**
- Automatic Google Sheets storage
- Email notifications
- Spam protection
- Response charts & analytics

---

## Alternative Option 2: Google Sheets Web App (Advanced)

For a custom form that posts directly to Google Sheets:

### Step 1: Create Google Sheet
1. Create new Google Sheet
2. Add headers: Timestamp | Name | Email | Subject | Message

### Step 2: Create Apps Script
1. Extensions → Apps Script
2. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.subject,
      data.message
    ]);

    // Send email notification
    MailApp.sendEmail({
      to: "info@causalatlas.org",
      subject: "New Contact Form Submission: " + data.subject,
      body: "Name: " + data.name + "\n" +
            "Email: " + data.email + "\n" +
            "Subject: " + data.subject + "\n\n" +
            "Message:\n" + data.message
    });

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Message sent successfully"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy Web App
1. Click "Deploy" → "New deployment"
2. Type: Web app
3. Execute as: Me
4. Who has access: Anyone
5. Copy the Web App URL

### Step 4: Update contact.md
Replace the form action URL:

```html
<form class="contact-form" id="contact-form-sheets">
```

Add this script at the bottom:

```javascript
<script>
document.getElementById('contact-form-sheets').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('.submit-button');
  const statusDiv = document.getElementById('form-status');

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    statusDiv.style.display = 'block';
    if (result.status === 'success') {
      statusDiv.className = 'success';
      statusDiv.innerHTML = '✓ Thank you! Your message has been sent successfully.';
      form.reset();
    } else {
      statusDiv.className = 'error';
      statusDiv.innerHTML = '✗ Sorry, there was an error. Please try again or email directly.';
    }
  })
  .catch(error => {
    statusDiv.style.display = 'block';
    statusDiv.className = 'error';
    statusDiv.innerHTML = '✗ Sorry, there was an error. Please email info@causalatlas.org directly.';
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  });
});
</script>
```

---

## Alternative Option 3: Formspree with Custom Email

To use your own Formspree account (100 submissions/month free):

1. Sign up at https://formspree.io
2. Create new form
3. Set email to: info@causalatlas.org
4. Get form endpoint (e.g., `https://formspree.io/f/xxxxxx`)
5. Replace in contact.md:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Benefits:**
- No code required
- Spam filtering
- File uploads support
- Email notifications
- Export to CSV

---

## Recommendation

**Keep current Formspree setup** - it's working and free.

If you want Google Sheets storage, use **Option 2 (Google Sheets Web App)** for full control and automatic spreadsheet logging.

For simplicity, use **Option 1 (Google Forms)** - just embed and you're done.

---

## Testing the Current Form

1. Visit: https://geoffreymanda.github.io/contact
2. Fill out the form
3. Submit
4. Check info@causalatlas.org for the email
5. Verify success message appears

**Note:** First submission to a new Formspree endpoint requires email confirmation.
