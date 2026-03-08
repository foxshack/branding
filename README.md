# Foxshack Branding

A **semantic CSS theme** that provides a unified look and feel across projects. This branding system uses a carefully chosen color palette and semantic HTML styling to create consistent, accessible, and maintainable web experiences.

## Features

- **Semantic CSS Styling**: HTML elements are styled based on their semantic meaning, keeping markup clean and CSS maintainable
- **Consistent Color Palette**: Three carefully selected brand colors with tints and shades for visual consistency
- **Accessible Typography**: Semantic typography system with proper heading hierarchy and text formatting
- **Complete Component Showcase**: Reference HTML page demonstrating all styled elements in action
- **CSS Custom Properties**: Organized token system using CSS variables for easy customization

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
├── style.css           # Complete semantic CSS theme
└── README.md           # This file
```

## Files

### `style.css`
The core branding stylesheet containing:
- CSS custom property definitions for colors, typography, and spacing
- Semantic styling for all HTML elements (headings, paragraphs, lists, tables, forms, etc.)
- CSS reset and base styles
- Responsive design utilities

### `index.html`
A comprehensive showcase page demonstrating:
- Typography and heading levels
- Text formatting (bold, italic, highlighted, code)
- Lists (ordered, unordered, definition lists)
- Code blocks and inline code
- Tables
- Forms and form elements
- Blockquotes and semantic elements
- Navigation structure

## Getting Started

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