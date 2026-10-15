// Builds the site and pre-renders it to static HTML so crawlers (and link previews) get the
// full page content without running JavaScript. The browser then hydrates that markup.
import { build } from 'vite'
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const ssrOutDir = `${root}dist-ssr`

// Shared by both builds so time-based text (e.g. "2 weeks ago") renders identically on the
// server and during hydration. See src/buildTime.js.
process.env.VITE_BUILD_TIME ??= String(Date.now())

await build({ root })
await build({
  root,
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.js', outDir: ssrOutDir, emptyOutDir: true },
})

const { render } = await import(pathToFileURL(`${ssrOutDir}/entry-server.js`).href)
const { html, themeCss } = await render()

const indexPath = `${root}dist/index.html`
const template = await readFile(indexPath, 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('index.html is missing the <!--app-html--> placeholder')

const page = template
  .replace('<!--app-html-->', html)
  .replace('</head>', `  <style id="vuetify-theme-stylesheet">${themeCss}</style>\n  </head>`)

await writeFile(indexPath, page)
await rm(ssrOutDir, { recursive: true, force: true })
console.log('✓ pre-rendered dist/index.html')
