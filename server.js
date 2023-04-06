import express from "express";
import ejs from "ejs";

import routes from "./routes/index.js";

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

routes(app);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${3000}...`)
})