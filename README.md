# Psycho Labs — Official Developer Studio Website

The official organization website for **Psycho Labs**, an independent software and Android app development studio.

Hosted on **GitHub Pages**: [https://madebypsycho.github.io](https://madebypsycho.github.io)  
Prepared for **Google Play Console organization verification**.

---

## 🎨 Visual Identity & Typography

- **Brand Typography**: **Bowlby One SC** (Google Fonts) for all headlines, button labels, and brand lettering, perfectly matching the original Psycho Labs blocky robot logo typeface. Paired with clean, accessible **Inter** for long-form reading and legal disclosures.
- **Header Logo**: Pure robot mascot head (`assets/images/header-mascot.png`) with zero text underneath it.
- **Brand Palette**:
  - Deep Black: `#111111` (Borders, structural frames)
  - Philosophy Cards: `#222222` with electric purple offset shadows
  - Warm Off-White: `#F4F1EB` (Primary background canvas & dot grid)
  - Electric Purple (Accent): `#792BFF`
  - Bright Violet (Highlight): `#A855F7`
  - White: `#FFFFFF`

---

## 📁 Repository Structure

```text
Psycho Labs/
├── .gitignore                  # Git ignore rules for OS & IDE artifacts
├── README.md                   # Project documentation & deployment guide
├── robots.txt                  # Search engine crawl directives
├── sitemap.xml                 # Search engine sitemap
│
├── index.html                  # Official studio homepage
├── about.html                  # Studio profile, ethos, and engineering focus
├── apps.html                   # Software showcase (Reverse View, Auto Launcher)
├── contact.html                # Direct developer studio contact page
├── privacy.html                # Studio Master Privacy Policy
├── privacy-reverseview.html    # Dedicated standalone Privacy Policy for Reverse View
├── privacy-autolauncher.html   # Dedicated standalone Privacy Policy for Auto Launcher
├── terms.html                  # Studio Terms & Conditions
├── 404.html                    # Custom 404 error page (handled by GitHub Pages)
│
└── assets/
    ├── css/
    │   └── styles.css          # Studio stylesheet with dark & light mode support
    ├── js/
    │   ├── config.js           # Central studio config (Single email, business details)
    │   └── script.js           # Interactions (theme toggle, mobile nav, form feedback)
    ├── icons/
    │   ├── favicon.png         # Favicon (64x64)
    │   ├── favicon-32.png      # Favicon (32x32)
    │   └── favicon-192.png     # Apple touch / web clip icon (192x192)
    └── images/
        ├── header-mascot.png       # Light mode header mascot
        ├── header-mascot-dark.png  # Dark mode header mascot
        ├── mascot-hero.png         # Main robot mascot illustration
        ├── website-logo.png        # Studio brand logo
        └── branding/               # Source artwork and logo variants
            ├── mascot-emblem.png
            ├── mascot-emblem-dark.png
            ├── website-logo.png
            ├── website-logo-dark.png
            ├── Psycho Labs Robot Mascot Logo.png
            └── Psycho Labs Robot Mascot Logo-dark.png
```

---

## ⚡ Studio Configuration (`assets/js/config.js`)

Core company details and developer contacts are maintained in [`assets/js/config.js`](assets/js/config.js):

- **Studio Name**: Psycho Labs
- **Official Email**: `psycholabssupport@gmail.com`
- **Business Location**: Patna, Bihar, India
- **Live Website**: `https://madebypsycho.github.io`
- **Contact Form Delivery**: Formspree API (`formspreeId: "moeerlqd"`)

Any HTML element with a `data-config="key"` attribute automatically pulls its value from this file on page load.

---

## 📬 Contact Form & Direct Email Delivery (Formspree API)

The contact form is configured for **1-step background delivery** straight to `psycholabssupport@gmail.com`:

- **Single-Step Submission**: When a visitor enters their details and clicks **"Send Message"**, the submission transmits directly via AJAX (`https://formspree.io/f/moeerlqd`).
- **Zero Redirects or Popups**: No external windows or mail apps are opened. The visitor receives an immediate on-page confirmation message.
- **Configurable**: Managed cleanly via `formspreeId: "moeerlqd"` in [`assets/js/config.js`](assets/js/config.js).

---

## 🛡️ Google Search Console & Google Play Console Verification

### Google Search Console Verification
The verification tag has been placed in the `<head>` of [`index.html`](index.html):
```html
<meta name="google-site-verification" content="e3rhK58hmfslusq92KugulrWGEbOZoYFFjjdilhbJd0" />
```

### Associate with Google Play Console
1. Log into your [Google Play Console](https://play.google.com/console).
2. Navigate to **Developer Account** &rarr; **Account Details**.
3. Under **Developer Website**, input your verified website URL:
   `https://madebypsycho.github.io`
4. Under **Contact details**, verify your developer email:
   `psycholabssupport@gmail.com`
5. When creating your apps in Google Play Console, use the dedicated standalone privacy policy URLs:
   - **Reverse View**: `https://madebypsycho.github.io/privacy-reverseview.html`
   - **Auto Launcher**: `https://madebypsycho.github.io/privacy-autolauncher.html`

---

## 📄 License & Intellectual Property

Copyright &copy; 2026 Psycho Labs. All rights reserved.
All logos, mascot artwork, application names, and source files belong to Psycho Labs.

