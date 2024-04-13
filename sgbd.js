import { dirname, join } from 'path'

import { JSONFilePreset } from 'lowdb/node'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));
// Use JSON file for storage
const file = join(__dirname, './db_data.json')
console.log("file",file);

const db = await JSONFilePreset(file, {})

const sgbd = {
    db: db.data,
    
    async init() {
        // Read data from JSON file, this will set db.data content
        await db.read()
        sgbd.db = db.data
        console.log("🔥 sgbd carregado")
        console.log("dados já armazenados:",db.data)
    },
    async write() {
        await db.write()
    }
}

export default sgbd