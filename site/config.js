/**
 * TabulaKit Site Configuration
 *
 * Edit these values to customize your documentation site.
 * The /startup wizard will configure these for you automatically.
 */
window.TABULAKIT_CONFIG = {
  // Site identity
  name: "Genesis",
  description: "Preparing a grant proposal as part of the DOE's Genesis Mission",
  logo: "assets/logo.png",  // Path to logo image (optional, shown in sidebar)

  // Theme colors (CSS custom property overrides)
  theme: {
    color: "#64748b",           // Primary accent color (headings)
    tealColor: "#94a3b8",       // Secondary accent (links, nav highlights)
    sidebarWidth: "280px",
    baseFontSize: "16px"
  },

  // Docsify options (merged into window.$docsify)
  docsify: {
    subMaxLevel: 3,
    search: true
  }
};
