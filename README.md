# AI Naksha Studio — Premium Static Website

A multi-page, vanilla HTML/CSS/JS architecture + AI visualization website for **AI NAKSHA STUDIO**.

## Structure

- `index.html` — Home
- `services.html` — Services
- `portfolio.html` — Portfolio + filtering + project modal
- `about.html` — Studio / About
- `order.html` — Project intake → WhatsApp
- `contact.html` — Contact
- `css/style.css` — shared design system and responsive styles
- `js/main.js` — navigation, reveals, transitions
- `js/portfolio.js` — filtering + modal
- `js/order.js` — WhatsApp order generation
- `assets/logo.png` — supplied brand emblem cropped from the provided reference artwork; replace with the original standalone logo file if you have it
- `assets/favicon.png` — favicon version
- `assets/images/source-brand-reference.png` — provided reference artwork

## Replace the sample project imagery

All sample imagery is loaded from replaceable Unsplash image URLs in the HTML files. Search for `images.unsplash.com` and replace each URL with your own project image path, for example:

`assets/images/projects/residence-01.jpg`

For a fully self-contained GitHub Pages site, put your images in `assets/images/projects/` and update the `src` values.

## Run locally

### Option 1 — simplest
Open `index.html` in a browser. The site works as a static website, although a local server is recommended for the cleanest behavior.

### Option 2 — Python local server
From the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Free GitHub Pages deployment

1. Create a GitHub repository, e.g. `AI-Naksha-Studio`.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save. GitHub will publish the static site at the generated Pages URL.

No server, database, paid API or paid backend is required.

## WhatsApp order flow

`js/order.js` formats the submitted form and opens:

`https://wa.me/919571481348?text=...`

The recipient is **+91 9571481348**.

## Editing brand details

The core contact details are repeated in the page footers and contact page. Search for:

- `9571481348`
- `ainakshastudio@gmail.com`
- `ai_naksha_studio`
- `Gharsisar`
- `Wasim Khan`

## Design notes

The visual system intentionally uses black, warm off-white, muted metallic gold and restrained emerald, with editorial serif typography, thin rules, oversized type, large imagery, subtle grain and restrained motion. Rounded-card UI, neon gradients and heavy glassmorphism are intentionally avoided.
