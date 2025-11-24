const prompt = require("prompt-sync")();
const fs = require('fs');
const path = require('path');

while (true) {
  const escolha = prompt(`Digite 0 para sair`);

  if (escolha == "0") {
    console.log("Saindo");
    break;
  } else {
    continue;
  }
}

function loadDB() {
    try {
        const raw = fs.readFileSync("./bd.json", 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error('Erro ao ler bd.json:', err.message);
        return {
            nome_praça: '',
            pontos_bicicleta: [],
            usuarios: [],
            corridas: []
        };
    }
    }

    function saveDB(db) {
        try {
            fs.writeFileSync(dbPath, JSON.stringify(db, null, 4), 'utf8');
            return true;
         } catch (err) {
            console.error('Erro ao salvar bd.json:', err.message);
            return false;
        }
    }

    function getNextId(name) {
        const db = loadDB();

        const values = db.name || [];

        let maxID = 0;
        for (let i = 0; i < usuarios.length; i++) {
            const u = usuarios[i];
            if (typeof u.id === 'number' && u.id > maxID) {
                maxID = u.id;
            }
        }
        const newID = maxID ? maxID + 1 : 1;
        // condição (true ou false) ? valor se verdadeiro : valorse falso

        // if (maxID !== 0) {
        //    const newId = maxId + 1
        // } else {
        //      const nerID = 1
        // }
    }
    
function cadastrarUsuario(name) {

}