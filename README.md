# Psycho Labs — Official Developer Studio Website

The official organization website for **Psycho Labs**, an independent software and Android app development studio.

This website is engineered for fast, static deployment on **GitHub Pages** (or any static web host) and prepared for **Google Play Console organization verification**.

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
├── apps.html                   # Software showcase (ReverseView, Auto Launcher)
├── contact.html                # Direct developer studio contact page
├── privacy.html                # Studio Master Privacy Policy
├── privacy-reverseview.html    # Dedicated standalone Privacy Policy for ReverseView
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

## ⚡ Centralized Configuration (`assets/js/config.js`)

All core company details, business location, and your **single contact email** are maintained in [`assets/js/config.js`](assets/js/config.js):

```javascript
const PSYCHO_CONFIG = {
  studioName: "Psycho Labs",
  legalEntityName: "[YOUR LEGAL ENTITY NAME, e.g., Psycho Labs LLC]",
  tagline: "We make weirdly useful things.",
  
  // Single Unified Email (used across contact, support, and legal policies)
  email: "[INSERT_YOUR_EMAIL, e.g., hello@psycholabs.dev]",

  businessPhone: "[OPTIONAL_BUSINESS_PHONE, e.g., +1 (555) 000-0000]",
  businessLocation: "[INSERT BUSINESS CITY & COUNTRY, e.g., California, United States]",
  // ...
};
```

Any HTML element with a `data-config="key"` attribute automatically pulls its value from this file on page load.

---

## 📝 Critical Placeholders to Fill Before Publishing

Before submitting this website to Google Play Console, update the following placeholders:

| File | Placeholder | What to Replace With |
| :--- | :--- | :--- |
| `assets/js/config.js` | `email` | **Your single official developer email** (matches Google Play Console). |
| `assets/js/config.js` | `legalEntityName` | Your registered business name (e.g., `Psycho Labs LLC`) or individual developer legal name. |
| `assets/js/config.js` | `businessPhone` | Optional business phone (or leave empty if not used). |
| `assets/js/config.js` | `businessLocation` | City, State/Province, and Country where your studio is based. |
| `index.html` | `[INSERT_GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN]` | Your verification code from Google Search Console (see below). |
| `privacy-reverseview.html` | Package Name & Crash SDKs | Update package name (`com.psycholabs.reverseview`) and select whether analytics/crash SDKs are used. |
| `privacy-autolauncher.html` | Package Name & Location Scope | Update package name (`com.psycholabs.autolauncher`) and confirm whether location/speed tracking is enabled. |
| `terms.html` | Governing Law Jurisdiction | State, Province, or Country governing software terms. |
| `sitemap.xml` | `https://psycholabs.dev` | Replace domain with your custom domain or your GitHub Pages URL (`https://<username>.github.io/<repo>/`). |

---

## 🚀 Free Deployment on GitHub Pages

The entire website uses **relative paths**, ensuring it works seamlessly whether hosted on a root custom domain (`psycholabs.dev`) or a GitHub Pages subpath (`username.github.io/repository/`).

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new public repository (e.g., `psycho-labs` or `username.github.io`).
2. **Push Website Files**:
   - Upload all files from this directory directly into the repository root branch (`main`).
3. **Enable GitHub Pages**:
   - In your repository, click **Settings** &rarr; **Pages**.
   - Under **Build and deployment**:
     - Source: **Deploy from a branch**
     - Branch: Select `main` and folder `/ (root)`.
     - Click **Save**.
4. **Live URL**:
   - Within 1–2 minutes, your website is live at `https://<your-username>.github.io/<repo-name>/`.

---

## 🛡️ Google Search Console & Google Play Console Verification

### Step 1: Verify Website Ownership in Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** and enter your live website URL (e.g., `https://psycholabs.dev` or your GitHub Pages URL).
3. Choose **HTML tag** as the verification method.
4. Copy the token from the meta tag:
   ```html
   <meta name="google-site-verification" content="YOUR_UNIQUE_TOKEN_HERE" />
   ```
5. Open [`index.html`](index.html), replace `[INSERT_GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN]` with your token, commit, and push.
6. Click **Verify** in Search Console.

### Step 2: Associate with Google Play Console
1. Log into your [Google Play Console](https://play.google.com/console).
2. Navigate to **Developer Account** &rarr; **Account Details**.
3. Under **Developer Website**, input your verified website URL (`https://psycholabs.dev`).
4. Under **Contact details**, ensure your contact email matches the single email configured in [`assets/js/config.js`](assets/js/config.js).
5. When creating your apps in Google Play Console (e.g. ReverseView), input the public standalone privacy policy URL:
   - ReverseView: `https://psycholabs.dev/privacy-reverseview.html`
   - Auto Launcher: `https://psycholabs.dev/privacy-autolauncher.html`

---

## 📄 License & Intellectual Property

Copyright &copy; 2026 Psycho Labs. All rights reserved.
All logos, mascot artwork, application names, and source files belong to Psycho Labs.
