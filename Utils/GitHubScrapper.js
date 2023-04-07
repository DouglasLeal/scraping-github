import puppeteer from "puppeteer";

class GitHubScrapper{
    static async buscar(url){
        const browser = await puppeteer.launch({
            headless: true
        })
        const page = await browser.newPage();

        await page.setViewport({
            width: 800,
            height: 900,
            deviceScaleFactor: 1,
            isMobile: false,
            hasTouch: false,
            isLandscape: false
        });

        await page.goto(url);

        let listaRepositorios = [];

        let titulos = await page.$$('h3 a');

        for (const titulo of titulos) {
            let title = await titulo.getProperty("textContent")
            let href = await titulo.getProperty("href")
            listaRepositorios.push({
                nome: await title.jsonValue(),
                link: await href.jsonValue(),
            });
        }

        await page.click(".next_page")

        await page.waitForSelector('h3 a');


        titulos = await page.$$('h3 a');

        for (const titulo of titulos) {
            let title = await titulo.getProperty("textContent")
            let href = await titulo.getProperty("href")
            listaRepositorios.push({
                nome: await title.jsonValue(),
                link: await href.jsonValue(),
            });
        }
        await browser.close();

        return listaRepositorios;
    }
}

export default GitHubScrapper;