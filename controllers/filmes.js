import sgbd from '../sgbd.js'

const route = "/filmes"
const entity = "filmes"

function filmes(app) {

    app.get(route, function (req, res) {
        res.json(sgbd.db[entity])
    })

    app.get(route+"/:id", function (req, res) {
        res.json(sgbd.db[entity].find((filme) => filme.id === req.params.id))
    })

    app.post(route, function (req, res) {
        console.log('alguém fez requisição POST '+route);
        console.log('conteúdo do body:', req.body);
        sgbd.db[entity].push(req.body)
        sgbd.write()
        res.json(req.body)
    })

    app.put(route+"/:id", function (req, res) {
        console.log('alguém fez requisição PUT '+route+"/:id",req.params);
        console.log('conteúdo do body:', req.body);

        let { nome, ano, genero } = req.body;
        
        const filme = sgbd.db[entity].find((filme) => filme.id === req.params.id);

        nome = nome || filme.nome;
        ano = ano || filme.ano;
        genero = genero || filme.ano;

        filme.nome = nome;
        filme.ano = ano;
        filme.genero = genero;

        sgbd.write();

        res.json(req.body);
    })

    app.delete(route+"/:id", function (req, res) {
        console.log('alguém fez requisição PUT '+route+"/:id",req.params);
        const index = sgbd.db[entity].findIndex((filme) => filme.id === req.params.id)
        sgbd.db[entity].splice(index, 1)
        sgbd.write()
        res.json('Removido o filme com sucesso')
    })

}

export default filmes 