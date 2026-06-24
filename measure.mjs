import puppeteer from 'puppeteer-core'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const URL = 'http://localhost:5174/'
const width = Number(process.argv[2] || 390)

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'shell',
  args: ['--no-sandbox', '--hide-scrollbars'],
})
const page = await browser.newPage()
await page.setViewport({ width, height: 900, deviceScaleFactor: 2 })
await page.goto(URL, { waitUntil: 'networkidle0' })
await new Promise((r) => setTimeout(r, 400))

const info = await page.evaluate((vw) => {
  const out = { vw, scrollWidth: document.documentElement.scrollWidth, offenders: [] }
  for (const el of document.querySelectorAll('*')) {
    const r = el.getBoundingClientRect()
    if (r.right > vw + 1 || r.left < -1) {
      out.offenders.push({
        sel:
          el.className && typeof el.className === 'string'
            ? el.tagName + '.' + el.className.split(' ').filter(Boolean).join('.')
            : el.tagName,
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
      })
    }
  }
  out.offenders.sort((a, b) => b.right - a.right)
  out.offenders = out.offenders.slice(0, 16)
  return out
}, width)

console.log(JSON.stringify(info, null, 2))
await browser.close()
