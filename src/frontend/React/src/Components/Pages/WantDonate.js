import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BarraDePesquisa = styled.input`
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px;
  margin: 8px;
`;

const AreaDeBusca = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-bottom: 30px;
`

const BotaoPesquisar = styled.button`
  border: solid 3px #8b0000;
  background-color: #fff;
  color: #8b0000;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: #8b0000;
    color: #fff;
  }
`;

const Titulo = styled.h1`
  font-weight: bold;
  font-size: 2em;
  color: #8b0000;
  margin: 8px;
  margin-top: 10vh;
`;

const GridLocais = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const LocalArea = styled.div`
  border: 2px solid #8b0000;
  border-radius: 10px;
  padding: 15px;
  background-color: #f9f9f9;
  margin: 8px;
`;

const Subtitulo = styled.h3`
  color: #8b0000;
  font-size: 1.2em;
`;

const Texto = styled.p`
  font-size: 1em;
  margin: 8px;
`;

const Link = styled.a`
  font-size: 1em;
  margin: 8px;
  &:hover {
    cursor: pointer;
    color: #8b0000;
  }
`

function WantDonate() {
  const [address, setAddress] = useState('');
  const [closestLocations, setClosestLocations] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setClosestLocations([]); // Limpar locais anteriores

    try {
      // Primeiro, buscar as coordenadas do endereço digitado pelo usuário
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
        params: {
          q: address, // O endereço a ser geocodificado
          key: '2e6c32e8e7ae469596d13638f6665674', // Chave da API do OpenCage
          language: 'pt', // Idioma da resposta
        }
      });

      const results = response.data.results;

      if (results.length > 0) {
        const { lat, lng } = results[0].geometry;

        // Agora, buscar os 4 locais mais próximos do banco de dados
        const secondLocalResponse = await axios.get('http://localhost:5000/api/coordinates', {
          params: {
            lat: lat,
            lng: lng,
          }
        });

        if (secondLocalResponse.data) {
          setClosestLocations(secondLocalResponse.data); // Atualiza com os locais mais próximos
        } else {
          setError('Nenhum local encontrado.');
        }
      } else {
        setError('Endereço não encontrado.');
      }

    } catch (err) {
      setError('Erro ao consultar a API ou o banco de dados.');
    }
  };

  return (
    <AreaDeBusca className="App">
      <Titulo>Quero Doar</Titulo>
      <form onSubmit={handleSubmit}>
        <BarraDePesquisa
          type="text"
          value={address}
          onChange={handleChange}
          placeholder="Digite o seu endereço"
        />
        <BotaoPesquisar type="submit">Obter Coordenadas</BotaoPesquisar>
      </form>

      {closestLocations.length > 0 && (
        <div>
          <Titulo>4 Locais de Doação Mais Próximos:</Titulo>
          <GridLocais>
            {closestLocations.map((loc, index) => (
              <LocalArea key={index}>
                <Subtitulo>{loc.nome_local}</Subtitulo>
                <Link href={`https://www.google.com/maps/search/?api=1&query=${loc.nome_local}`} target="_blank" rel="noopener noreferrer">Ver no Maps</Link>
                <Texto><strong>Local ID:</strong> {loc.id}</Texto>
                <Texto><strong>Distância:</strong> {loc.distance.toFixed(2)} km</Texto>
              </LocalArea>
            ))}
          </GridLocais>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </AreaDeBusca>
  );
}

export default WantDonate;
