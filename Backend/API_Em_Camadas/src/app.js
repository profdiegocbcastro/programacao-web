const express = require('express');
const bcrypt = require('bcryptjs');
const routes = require('./routes/routes');
const cors = require('cors');
const db = require('./database/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Seed: usuário de teste para facilitar o desenvolvimento
async function seed() {
    const senhaHash = await bcrypt.hash('123456', 10);
    db.users.push({ id: 1, nome: 'Admin', email: 'admin@cefet.com', senha: senhaHash });
}
seed();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('Usuário de teste: admin@cefet.com / 123456');
});
