import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Hook que você deve ter para obter o perfil

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 26px;
  color: red;
  margin-bottom: 10px;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: red;
    outline: none;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: red;
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d00000;
  }
`;

const StyledDangerButton = styled(StyledButton)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #ff1a1a;
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const ProfileCreation = () => {
  const { getProfile, updateProfile } = useAuth(); // Supondo que você tenha esses métodos
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bloodDonation, setBloodDonation] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Carregar o perfil se já existir
    const profile = getProfile();
    if (profile) {
      setName(profile.name || "");
      setAge(profile.age || "");
      setBloodDonation(profile.bloodDonation || "");
      setAddress(profile.address || "");
    }
  }, [getProfile]);

  const handleSave = () => {
    if (!name || !age || !bloodDonation || !address) {
      alert("Preencha todos os campos!");
      return;
    }
    updateProfile({ name, age, bloodDonation, address });
    alert("Perfil salvo com sucesso!");
    navigate("/profile"); // Redireciona após salvar
  };

  const handleClear = () => {
    setName("");
    setAge("");
    setBloodDonation("");
    setAddress("");
    alert("Informações excluídas.");
  };

  return (
    <Container>
      <Content>
        <Title>Criação do Perfil</Title>
        <Label>Nome:</Label>
        <StyledInput
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label>Idade:</Label>
        <StyledInput
          type="number"
          placeholder="Digite sua idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <Label>Já doou sangue?</Label>
        <StyledSelect
          value={bloodDonation}
          onChange={(e) => setBloodDonation(e.target.value)}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </StyledSelect>

        <Label>Endereço:</Label>
        <StyledInput
          type="text"
          placeholder="Digite seu endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <StyledButton onClick={handleSave}>Salvar</StyledButton>
        <StyledDangerButton onClick={handleClear}>
          Excluir Informações
        </StyledDangerButton>
      </Content>
    </Container>
  );
};

export default ProfileCreation;