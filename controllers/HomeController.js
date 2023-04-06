class HomeController{
    static async index(req, res){
        res.status(200).render("index");
    }

    static async buscar(req, res){
        let {url} = req.body;
        res.status(200).render("index");
    }
}

export default HomeController;