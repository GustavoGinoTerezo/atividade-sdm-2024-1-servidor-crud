import filmes from "./controllers/filmes.js"
import frutas from "./controllers/frutas.js"

// Criar todas as rotas e cruds para as entidades
function addRoutes(app) {
    frutas(app)
    filmes(app)
}

export default addRoutes