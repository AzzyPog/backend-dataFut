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

app.get('/jogador/gols', async (req, res) => {
  try {
    const [rows] = await database.query(queries.jogador.listarJogadoresPorGols);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro no retorno da query' });
  }
});

app.get('/gols/tempo', async (req, res) => {
  try {
    const [rows] = await database.query(queries.gol.listarGolsPorTempo);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro no retorno da query' });
  }
});

app.get('/estadios/campeonato/brasil', async (req, res) => {
  try {
    const [rows] = await database.query(queries.estadio.listarEstadiosPorCampeonatoBr);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro no retorno da query' });
  }
});

app.get('/jogadores/substituicao', async (req, res) => {
  try {
    const [rows] = await database.query(queries.jogador.listarJogadoresComMaisSubstituicao);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro no retorno da query' });
  }
});

app.get('/partida/gols', async (req, res) => {
  try {
    const [rows] = await database.query(queries.partida.listarPartidasGols);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro no retorno da query' });
  }
});

app.listen(port, () => {
  console.log(`server -> http://localhost:${port}`);
});