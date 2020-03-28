const express = require('express');
const routes = require("./routes")

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Métodos HTTP
 * 
 * GET:     Buscar ou listar uma informação do back-end
 * POST:    Criar uma informação no back-end
 * PUT:     Alterar informação no back-end
 * DELETE:  Deletar uma informação no back-end
 * 
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após ?(filtros, paginação, etc)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: 
 */
