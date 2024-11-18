function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Raio da Terra em km
  const grauR1 = lat1 * Math.PI / 180; // Converte a latitude de grau para radiano
  const grauR2 = lat2 * Math.PI / 180; // Converte a latitude de grau para radiano
  const lar = (lat2 - lat1) * Math.PI / 180; // Diferença de latitude em radianos
  const lor = (lon2 - lon1) * Math.PI / 180; // Diferença de longitude em radianos

  // Fórmula de Haversine
  const a = Math.sin(lar / 2) * Math.sin(lar / 2) +
            Math.cos(grauR1) * Math.cos(grauR2) *
            Math.sin(lor / 2) * Math.sin(lor / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distância em quilômetros
  return R * c;
}

function getClosestLocations(userLat, userLng, results) {
  // Calcular a distância de cada local em relação ao local digitado
  const locationsWithDistance = results.map(result => {
    const distance = haversine(userLat, userLng, result.latitude_local, result.longitude_local);
    return {
      id: result.id_local,
      nome_local: result.nome_local, // Adiciona o nome_local à resposta
      lat: result.latitude_local,
      lng: result.longitude_local,
      distance: distance, // Adiciona a distância calculada
    };
  });

  // Ordenar os locais pela distância em ordem crescente
  locationsWithDistance.sort((a, b) => a.distance - b.distance);

  // Retorna os 4 locais de doação mais próximos
  return locationsWithDistance.slice(0, 4);
}

module.exports = { haversine, getClosestLocations };
  