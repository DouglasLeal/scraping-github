import GitHubScrapper from "../Utils/GitHubScrapper.js";

class HomeController {
    static async index(req, res) {
        res.status(200).render("index");
    }

    static async buscar(req, res) {
        let { url } = req.body;
        let listaRepositorios = null;

        try {
            listaRepositorios = await GitHubScrapper.buscar(url);

            res.status(200).render("index", {repositorios: listaRepositorios});
        } catch (error) {
            let mensagem = {
                texto: "URL inválida.",
                tipo: "danger"
            }

            res.status(500).render("index", {mensagem});
        }      
    }
}

export default HomeController;