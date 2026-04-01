import express from 'express';
import router from './router.js';
import db from './database.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', router);

try {
    await db.authenticate();
    console.log("Eba!");
} catch (error) {
    console.log("Não eba...");
}

app.listen(port, () => {
    console.log(`Rodando na porta ${port}.`);
});