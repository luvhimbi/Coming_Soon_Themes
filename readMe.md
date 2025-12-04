# Coming Soon Page

This project provides a modern, responsive "Coming Soon" landing page that you can deploy to any domain while your main website is under development.

## Features

- **Responsive Design:** Built with [Bootstrap 5](https://getbootstrap.com/) for mobile and desktop compatibility.
- **Live Countdown Timer:** Displays the time remaining until your launch date.
- **Email Notification Form:** Lets visitors enter their email to be notified when the site goes live (currently shows a confirmation alert; can be connected to a backend or email service).
- **Multiple Theme Variants:** Includes light, dark, and modern/bright variants.

## Files / Themes

- **`default_design.html`** — Default theme (light card with Poppins font).
- **`dark_design.html`** — Dark theme variant (uses `styles-dark.css`).
- **`modern_design.html`** — Modern/bright variant (uses `styles-modern.css`).
- **`index.html`** - this shows all of the themes of the coming soon pages and links to them (uses `css/demo.css`)
- **`css/styles.css`** — Default theme styles.
- **`css/styles-dark.css`** — Dark theme styles.
- **`css/styles-modern.css`** — Modern theme styles.
- **`css/demo.css`** — has design of the coming soon demos pages
- **`script.js`** — Countdown and form handling logic.

## How to preview themes

- Open `index.html` in a browser for the default theme.
- Open `index-dark.html` for the dark theme.
- Open `index-modern.html` for the modern/bright theme.
- Open `demo.html` for the demos pages which shows all the pages.

## Customization

- Change the launch date in `script.js` (set a fixed future date).
- Replace `logo.jpeg` with your logo for each theme (or adjust the `img` src).
- To collect emails, connect the form in each HTML file to your backend or email provider.

## Notes

- All three HTML pages reuse `script.js` so the countdown logic remains consistent.
- Styles are separated so you can mix and match or extend them for additional themes.
