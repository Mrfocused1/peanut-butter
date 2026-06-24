import puppeteer from 'puppeteer-core'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const URL = 'http://localhost:5174/'

// args: width outfile [selector] [height]
const width = Number(process.argv[2] || 390)
const outfile = process.argv[3] || '/tmp/shot.png'
const selector = process.argv[4] || null
const height = Number(process.argv[5] || 900)

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'shell',
  args: ['--no-sandbox', '--hide-scrollbars'],
})
const page = await browser.newPage()
await page.setViewport({ width, height, deviceScaleFactor: 2 })
await page.goto(URL, { waitUntil: 'networkidle0' })
await new Promise((r) => setTimeout(r, 500))

if (selector) {
  const el = await page.$(selector)
  await el.screenshot({ path: outfile })
} else {
  await page.screenshot({ path: outfile, fullPage: true })
}
console.log('saved', outfile)
await browser.close()
