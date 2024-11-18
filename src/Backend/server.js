const express = require('express');
const cors = require('cors');
const { pool } = require('./db');
const { getClosestLocations } = require('./Calculo');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));

app.get('/api/coordinates', async (req, res) => {
  const { lat: userLat, lng: userLng } = req.query;

  try {
    const [results] = await pool.query(
      'SELECT id_local, nome_local, latitude_local, longitude_local FROM localdedoacao'
    );

    if (results.length > 0) {
      const closestLocations = getClosestLocations(userLat, userLng, results);
      res.json(closestLocations);
    } else {
      res.status(404).json({ error: 'Nenhum local encontrado' });
    }
  } catch (err) {
    console.error('Erro ao acessar o banco de dados:', err);
    res.status(500).json({ error: 'Erro ao acessar o banco de dados' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
