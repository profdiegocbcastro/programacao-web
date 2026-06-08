const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const professores = [
  {
    id: 1,
    nome: "Diego Cardoso",
    area: "Arquitetura de Software"
  },
  {
    id: 2,
    nome: "Cristiano Fuschilo",
    area: "IA e Otimização"
  },
  {
    id: 3,
    nome: "Vladimir Erthal",
    area: "Engenharia de Software"
  }
];

app.get("/professores", (req, res) => {
  res.json(professores);
});

app.get("/horario", (req, res) => {
  res.json({
    horario: new Date().toLocaleString()
  });
});

app.listen(3001, () => {
  console.log("API rodando na porta 3001");
});