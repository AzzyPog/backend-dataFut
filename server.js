const express = require('express');
const cors = require('cors');
const database = require('./config');
const queries = require('./queries');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());



app.get('/campeonato', async (req, res) => {
  try {
    const [rows] = await database.query(queries.campeonato.listarCampeonatos);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro no retorno da query' });
  }
});

app.listen(port, () => {
  console.log(`server -> http://localhost:${port}`);
});