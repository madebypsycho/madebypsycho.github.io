/**
 * PSYCHO LABS — OFFICIAL STUDIO CONFIGURATION
 * 
 * Edit the values below to update your studio details across the entire website.
 * Any HTML element with a [data-config="key"] attribute will automatically
 * be updated with the corresponding value from this file.
 */

const PSYCHO_CONFIG = {
  // Studio & Brand Identity
  studioName: "Psycho Labs",
  headerTagline: "INDEPENDENT STUDIO",
  legalEntityName: "Psycho Labs",
  tagline: "We make weirdly useful things.",
  description: "Psycho Labs is an independent software studio focused on building useful, creative and thoughtfully designed digital products.",

  // Single Unified Email (Used for general contact, app support, and privacy inquiries)
  email: "psycholabssupport@gmail.com",
  get contactEmail() { return this.email; },
  get supportEmail() { return this.email; },
  get privacyEmail() { return this.email; },

  // Contact Form Automated Delivery Service
  // Formspree (Free & Reliable for GitHub Pages):
  // 1. Create a free form at https://formspree.io connected to psycholabssupport@gmail.com
  // 2. Paste your Form ID here (e.g. "mqkvywzy") for automatic background delivery.
  // When empty, the form activates the instant 1-click Web Gmail & Mail Dispatch Hub.
  formService: {
    formspreeId: "moeerlqd" // e.g. "xaykzabc"
  },

  // Business Phone & Location
  businessPhone: "+91 6201211903",
  businessLocation: "Patna, Bihar, India",

  // Official Domains & URLs
  websiteUrl: "https://madebypsycho.github.io",
  googlePlayDeveloperName: "Psycho Labs",
  googlePlayDeveloperUrl: "[INSERT_GOOGLE_PLAY_DEVELOPER_PAGE_URL_ONCE_ACTIVE]",
  githubOrgUrl: "https://github.com/madebypsycho",

  // Active Android Apps
  apps: {
    reverseview: {
      name: "Reverse View",
      status: "In Development",
      category: "Android Camera & Video Utility",
      shortDescription: "Android reverse-camera application connecting a compatible USB video capture device to an Android phone to display a live rear-camera feed.",
      targetSdk: "Android 10+ (API level 29+)",
      privacyPolicyUrl: "privacy-reverseview.html"
    },
    autolauncher: {
      name: "Auto Launcher",
      status: "In Development",
      category: "Android Auto Utility",
      shortDescription: "An independent utility project designed to streamline in-car app navigation and vehicle-focused shortcuts.",
      targetSdk: "Android 10+ (API level 29+)",
      privacyPolicyUrl: "privacy-autolauncher.html"
    }
  }
};

// Auto-populate data-config attributes on DOM load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-config]").forEach(el => {
    const key = el.getAttribute("data-config");
    const val = PSYCHO_CONFIG[key];
    if (val) {
      if (el.tagName === "A" && (key.includes("mail") || key.includes("Email"))) {
        const cleanEmail = val.replace(/\[|\]/g, "");
        el.href = `mailto:${cleanEmail}`;
        el.textContent = val;
      } else if (el.tagName === "A" && key.includes("Url")) {
        el.href = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Current year auto-update
  document.querySelectorAll(".current-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
