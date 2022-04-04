// Importando bibliotecas
const express = require("express");
const bodyParser = require("body-parser");

// Configurações
const port = 10000;

// Iniciando App
const app = express();
// Instanciando Rotas
const routes = express.Router();

app.use(routes);
app.use(express.json());
app.use(bodyParser.json());

/**
 * get: somente consulta
 * post: gravacao
 * put: update
 * del: deletar
 * patch:
 * insert
 */
routes.get("/list", async (req, res) => {
    // Aqui eh apens uma exemplo de try catch sem parada do fluxo da api
    try {
        const b = 1;
        const c = a + b;
    } catch (error) {
        console.log(`Ops. deu erro mas vou seguir rodando.`);
    }

    // bloco principal para pegar os parametros da requisicao e validar se faz a consulta de um registro ou de todos
    try {
        console.log(req.query);

        const { material } = req.query; // ==> const material = req.material;

        const i = doLoop();

        console.log(`Finalizado o increment do i: ${i}`);

        if (material)
            return res.send(`Consultando apenas o material ${material}`);
        else return res.send("Consultando lista total com sucesso");
    } catch (e) {
        console.log(`Yeah... chegando no catch. `);
        return res.status(500).send(`Ops... Tivemos um erro: ${e}`);
    }
});

routes.post("/store", (req, res) => {
    console.log(req.body);

    const { teste } = req.body;

    console.log(teste1);

    return res.send("Sucesso.");
});

app.listen(process.env.PORT || port, () =>
    console.log(`Aplicação rodando e ouvindo na porta ${port}`)
);

async function doLoop() {
    var i = 0;

    while (i < 10) {
        //await setInterval(() => {
        //    console.log(`Aguardando...`);
        //}, 1000);
        i++;
    }

    return i;
}
