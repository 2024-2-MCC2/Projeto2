const express = require('express');
const cors = require('cors');
const { connection } = require('./db');
const { getClosestLocations } = require('./Calculo'); 

const app = express();
const port = process.env.PORT || 5000;

// Configuração do CORS para permitir requisições do frontend React
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));

// Endpoint para buscar as coordenadas de todos os locais e calcular a distância
app.get('/api/coordinates', (req, res) => {
  const { lat: userLat, lng: userLng } = req.query; // Recebe as coordenadas do primeiro local

  const query = 'SELECT id_local, nome_local, latitude_local, longitude_local FROM localdedoacao';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao acessar o banco de dados:', err);
      return res.status(500).json({ error: 'Erro ao acessar o banco de dados' });
    }

    if (results.length > 0) {
      // Usar a função de cálculo de distâncias de Calculo.js
      const closestLocations = getClosestLocations(userLat, userLng, results);

      res.json(closestLocations);
    } else {
      res.status(404).json({ error: 'Nenhum local encontrado' });
    }
  });
});

// Iniciar o servidor na porta configurada
app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
