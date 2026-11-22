# Waitlist landing page template

A launch page with an email sign-up that works on any static host. Plain HTML and CSS, no build step.

**[Live demo](https://formtango.github.io/waitlist-template/)**

- A big headline, one email field, one button
- Light and dark themes with a switch
- Product preview, three feature cards and an FAQ
- Sign-ups handled by [FormTango](https://formtango.com): stored in an inbox, spam filtered, exportable as CSV when you launch
- Responsive and accessible

## Use it

1. Click **Use this template** (or download the three files).
2. Edit the text in `index.html` and the colours at the top of `style.css`.
3. Host it anywhere: GitHub Pages, Netlify, Vercel, Cloudflare Pages.

## Make the form work

1. Get a form id. Sign up free at https://formtango.com (1,000 submissions a month), or create one with no account:

   ```bash
   curl -X POST https://formtango.com/api/v1/claims \
     -H "Content-Type: application/json" -d '{"name":"Contact form"}'
   ```

2. In `index.html`, replace `YOUR_FORM_ID` with it.

That's all. Until you do, the form runs in demo mode and tells visitors so.

## Customise

- **Preview:** replace the `.window` block with a screenshot of your product.
- **Glow:** change `--glow` in `style.css`, or remove it.
- **Send sign-ups to Mailchimp, Sheets or Slack:** connect them in FormTango.

## License

MIT. No attribution needed, though the footer link is appreciated.
