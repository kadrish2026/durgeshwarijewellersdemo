# Durgeshwari Jewellers - Website Demo (by KADRISH)

## Open it
Double-click `index.html`. No installation is needed (internet is needed for photos and fonts).

## Files
- `index.html` - page structure (each section is marked with a comment)
- `style.css` - design; colours are at the top in `:root`
- `script.js` - business details, products, collections, gallery, WhatsApp, modal

## Edit things (all in `script.js`)
- Phone / WhatsApp / Instagram / map: section 1. WhatsApp number = digits only, e.g. `918691906955`.
- Add a product: copy one `{ ... }` block in `products` (section 3) and add a comma.
- Remove a product: delete its block.
- Change a photo: replace the `image` URL. For your own file, put it in `assets/images/` and use `"assets/images/ring1.jpg"`.
- Hero / About / Banner / Showroom photos: change the `src` in `index.html`.
- Text: edit directly in `index.html`.

## About the photos
Photos load from Unsplash links. If a link ever fails, a gold fallback image shows automatically. Please open the site and check every photo before sending it to the client. Replace any link that looks wrong with a better photo from unsplash.com or pexels.com, and use the client's own photos when available.

## Deploy
- Netlify: go to app.netlify.com/drop and drag the whole folder in.
- GitHub Pages: upload the files to a repository, then Settings > Pages > Deploy from branch `main`, folder `/root`.
