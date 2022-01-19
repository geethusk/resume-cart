    import { puppeteer } from "puppeteer"; 

    const takeScreenshot = async() =>{
        const browser = await puppeteer.launch({headers:false});
        const page = await browser.newPage();
        await page.goto('http:localhost:3000/raeez/second');
        await page.screenshot({ path: 'example.png' });
        await browser.close();
      }

      export default takeScreenshot