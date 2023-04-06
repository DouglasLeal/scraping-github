import express from "express";
import ejs from "ejs";

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const port = 3000;

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${3000}...`)
})