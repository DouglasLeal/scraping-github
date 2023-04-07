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

        let repositorios = await page.$$('li.source');

        for(const repo of repositorios){
            let titulo = await repo.$('h3 a');
            let spanPublicPrivate = await repo.$('span.Label--secondary');
            let spanTecnologia = await repo.$("span[itemprop=programmingLanguage]");

            if(titulo && spanPublicPrivate && spanTecnologia){
                listaRepositorios.push({
                    nome: await titulo.evaluate(node => node.innerText),
                    link: await titulo.evaluate(node => node.href),
                    privacidade: await spanPublicPrivate.evaluate(node => node.innerText),
                    tecnologia: await spanTecnologia.evaluate(node => node.innerText)
                });
            }
        }

        await browser.close();

        return listaRepositorios;
    }
}

export default GitHubScrapper;