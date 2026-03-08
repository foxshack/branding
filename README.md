# Foxshack Branding

A **semantic CSS theme** that provides a unified look and feel across projects. This branding system uses a carefully chosen color palette and semantic HTML styling to create consistent, accessible, and maintainable web experiences.

## Features

- **Semantic CSS Styling**: HTML elements are styled based on their semantic meaning, keeping markup clean and CSS maintainable
- **Consistent Color Palette**: Three carefully selected brand colors with tints and shades for visual consistency
- **Accessible Typography**: Semantic typography system with proper heading hierarchy and text formatting
- **Complete Component Showcase**: Reference HTML page demonstrating all styled elements in action
- **CSS Custom Properties**: Organized token system using CSS variables for easy customization
- **Interactive Navigation**: JavaScript-powered mobile menu with toggle and responsive behavior
- **SASS Build System**: Organized stylesheet structure with automated compilation to CSS

## Color Palette

The Foxshack branding system features three primary colors:

| Color Name | Color Code | Hex Value | Purpose |
|------------|-----------|-----------|---------|
| **Solar Clay** | Primary | `#D96E3C` | Main brand color; used for emphasis and key elements |
| **Mineral Grey** | Accent 1 | `#6A6A6A` | Neutral accent; backgrounds and muted text |
| **Verdant Lime** | Accent 2 | `#8BBF2F` | Success and callout color; links and highlights |

Each color includes tints (lighter) and shades (darker) for depth and visual hierarchy:
- **Lighter**: 40% tint
- **Light**: 20% tint
- **Dark**: 20% shade
- **Darker**: 40% shade

## Project Structure

```
foxshack_branding/
├── index.html          # Showcase page demonstrating the theme
├── index.js            # Interactive navigation and menu functionality
├── style.scss          # SASS source for semantic CSS theme
├── style.css           # Compiled semantic CSS theme (generated from style.scss)
├── package.json        # Project configuration and npm scripts
├── LICENCE             # Project license
└── README.md           # This file
```

The source SASS stylesheet that compiles to `style.css`, containing:
- CSS custom property definitions for colors, typography, and spacing
- Semantic styling for all HTML elements (headings, paragraphs, lists, tables, forms, etc.)
- CSS reset and base styles
- Responsive design utilities

### `style.css`
The compiled CSS stylesheet (auto-generated from `style.scss`). Include this in your projects.

### `index.html`
A comprehensive showcase page demonstrating:
- Typography and heading levels
- Text formatting (bold, italic, highlighted, code)
- Lists (ordered, unordered, definition lists)
- Code blocks and inline code
- Tables
- Forms and form elements
- Blockquotes and semantic elements
- Responsive navigation with mobile menu

### `index.js`
JavInstallation

### Prerequisites
- Node.js and npm installed on your system
- Basic command line knowledge

### Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

## Getting Started

### Development Workflow

To work on the SASS stylesheets with automatic compilation:

```bash
npm run watch
```

This command monitors `style.scss` for changes and automatically compiles to `style.css`.

To do a one-time build:

```bash
npm run build
```

### Using This Theme

1. **Copy the stylesheet** to your project:
   ```bash
   cp style.css /path/to/your/project/
   ```

2. **Link the stylesheet** in your HTML:
   ```html
   <link rel="stylesheet" href="style.css">
   ```

3. **Write semantic HTML**: The theme styles standard HTML elements directly, so simply use appropriate semantic tags:
   ```html
   <article>
     <h2>Article Title</h2>
     <p>Article content...</p>
     <ul>
       <li>List item</li>
     </ul>
   </article>
   ```

4. **Customize with CSS variables**: Override colors and typography in your own CSS:
   ```css
   :root {
     --fs-color-primary: #customcolor;
     --fs-font-size-base: 18px;
   }
   ```

### Viewing the Showcase

Open `index.html` in a web browser to see all styled elements in action, including the interactive mobile navigation menuyour own CSS:
   ```css
   :root {
     --fs-color-primary: #customcolor;
     --fs-font-size-base: 18px;
   }
   ```

### Viewing the Showcase

Open `index.html` in a web browser to see all styled elements in action.

## Typography

The theme uses a system font stack for optimal performance:
- **Sans Serif**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, and fallbacks
- **Monospace**: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", and fallbacks
- **Base Font Size**: 16px
- **Line Height**: 1.6 (normal), 1.2 (tight for headings)

## Semantic Elements Included

- Headings (h1–h6)
- Paragraphs and text formatting (strong, em, mark, code, small)
- Lists (ul, ol, dl)
- Blockquotes and citations
- Code blocks (pre)
- Tables
- Forms and form controls
- Navigation
- Headers, footers, and main content areas
- Articles, sections, and asides

## Customization

The theme is built on CSS custom properties, making it easy to customize:

```css
:root {
  /* Change primary color */
  --fs-color-primary: #YourColor;
  
  /* Adjust typography */
  --fs-font-size-base: 18px;
  --fs-line-height-base: 1.8;
  
  /* Modify spacing */
  --fs-spacing-unit: 8px;
}
```

## Browser Support

This theme supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT 

---

**Last Updated**: March 2026