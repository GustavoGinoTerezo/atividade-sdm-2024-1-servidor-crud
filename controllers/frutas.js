import sgbd from '../sgbd.js'

const route = "/frutas"
const entity = "frutas"

function frutas(app) {

    app.get(route, function (req, res) {
        console.log('alguém fez requisição GET '+route);
        res.json(sgbd.db[entity])
    })

    app.get(route+"/:id", function (req, res) {
        console.log('alguém fez requisição GET '+route+"/:id",req.params);
        res.json(sgbd.db[entity][req.params.id])
    })

    app.post(route, function (req, res) {
        console.log('alguém fez requisição POST '+route);
        console.log('conteúdo do body:', req.body);
        sgbd.db[entity][req.body.fruta] = req.body.fruta
        sgbd.write()
        res.json(sgbd.db[entity][req.body.fruta])
    })

    app.put(route+"/:id", function (req, res) {
        console.log('alguém fez requisição PUT '+route+"/:id",req.params);
        console.log('conteúdo do body:', req.body);
        sgbd.db[entity][req.params.id] = req.body.fruta
        sgbd.write()
        res.json(sgbd.db[entity][req.params.id])
    })

    app.delete(route+"/:id", function (req, res) {
        console.log('alguém fez requisição PUT '+route+"/:id",req.params);
        delete sgbd.db[entity][req.params.id]
        sgbd.write()
        res.json({})
    })

}

export default frutas 