const puppeteer = require('puppeteer');
require('dotenv').config()

let LOGIN = async () => {
    console.log(`\n WORKING[200] \n\n **************** \n Made by Cristian \n\n LICENSE: MIT \n\n GitHub: https://github.com/cristiancaetano29 \n **************** \n`)
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108")
    let email = process.env.EMAIL
    let senha = process.env.SENHA

    await page.goto('https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsignup%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home');
    page.waitForNavigation()
    await page.type('#login_field', email, { delay: 200 })
    await page.type('#password', senha, { delay: 200 })
    //await page.screenshot({ path: 'example.png' });
    await page.keyboard.press('Enter');
    console.log('LOGIN EFETUADO COM SUCESSO!!!')
}

LOGIN()