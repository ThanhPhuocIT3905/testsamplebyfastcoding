# AGENTS.md

## Project Context

This project is a static real-estate landing page based on the `testsample01` design reference. The assignment requires clean, responsive HTML/CSS without frontend frameworks.

## Requirements

- Use plain HTML5 and CSS3 only.
- Do not use Bootstrap, Tailwind, React, Vue, jQuery, or other UI frameworks/libraries.
- Use relative paths for all local assets and styles.
- Keep the code clean, readable, and easy to review.
- Make the page responsive for desktop, tablet, and smartphone layouts.
- Preserve the current one-page landing page structure unless the user asks for extra pages.
- Prepare for deployment with a test URL and a data server URL.

## Current File Structure

- `index.html`: main landing page markup.
- `css/reset.css`: browser reset and box sizing.
- `css/variables.css`: colors, fonts, spacing, breakpoints.
- `css/base.css`: global typography and default element styles.
- `css/layout.css`: container, grid, section spacing, common layout utilities.
- `css/components.css`: reusable UI pieces such as buttons, cards, badges, forms, and navigation.
- `css/sections.css`: page-specific sections such as hero, services, featured property, blog, contact, and footer.
- `css/responsive.css`: media queries for tablet and mobile.
- `css/style.css`: imports all CSS files in order.
- `assets/`: images, icons, and fonts.
- `data/db.json`: mock data for the data server requirement.

## Page Sections

Build and maintain the landing page in this order:

1. Top bar
2. Header/navigation
3. Hero section
4. Buyer/Renter/Seller guide cards
5. About/dream living spaces section
6. Today sells properties section
7. Services grid
8. Featured property cards
9. Stats/banner section
10. Testimonial section
11. Projects/subscription section
12. Blog section
13. Contact section
14. Footer

## Coding Guidelines

- Prefer semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Use class names that describe the block/component, for example `hero`, `property-card`, `service-card`, `contact-form`.
- Avoid inline styles.
- Avoid absolute positioning unless it is needed for small decorative/floating elements.
- Use CSS Grid or Flexbox for layout.
- Use `max-width` containers for desktop content.
- Test at common widths: 1440px, 1366px, 992px, 768px, 480px, and 375px.
- Keep image paths relative, for example `./assets/images/hero.jpg`.
- Keep CSS imports relative, for example `@import url("./variables.css");`.

## Deployment Notes

Recommended deployment targets:

- Frontend: Vercel, Netlify, or GitHub Pages.
- Data server: Render with JSON Server, MockAPI, Glitch, or another simple mock API host.

The final submission should include:

- Source code repository URL.
- Deployed web URL.
- Data server URL.
