# Legacy Pool Co.

Marketing website for **Legacy Pool Co.** — a family-owned, locally operated swimming pool
service company proudly serving **Yuma, Arizona**. Weekly maintenance, filter cleaning,
equipment repairs, green-to-clean, and more. Weekly service starting at **$150/month**.

## Stack

- **Vue 3** + **Vite** — framework & build tooling
- **Vuetify 3** — Material component library (theme in `src/plugins/vuetify.js`)
- **Tailwind CSS** — utility classes (Preflight disabled to avoid clashing with Vuetify)
- **EmailJS** — client-side contact form delivery

## Local development

```bash
npm install
cp .env.example .env   # then fill in your EmailJS keys
npm run dev            # start the dev server
npm run build          # production build to dist/
npm run preview        # preview the production build
```

## EmailJS setup

The contact form sends through [EmailJS](https://www.emailjs.com/). Create a service +
template, then set these in `.env` (never commit `.env`):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

In your EmailJS template, set the **To** address to `legacypoolservice26@gmail.com` and map
these variables: `from_name`, `from_email`, `from_phone`, `service_type`, `message`.

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys
`dist/` to GitHub Pages. **One-time setup:** in the repo, go to
**Settings → Pages → Source → GitHub Actions**.

The Vite `base` is set to `/legacy-pool-service/` in `vite.config.js` to match the Pages path.
If you move to a custom domain, change `base` to `'/'`.

## Contact

Aubrianna Ziemer · (928) 750-0972 · legacypoolservice26@gmail.com
[Instagram @legacypoolserviceaz](https://www.instagram.com/legacypoolserviceaz/)
