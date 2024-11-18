import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  padding: 40px 30px;
  border-radius: 12px;
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

const LabelSignup = styled.div`
  font-size: 16px;
  color: #676767;
  text-align: center;

  a {
    text-decoration: none;
    color: red;
    font-weight: bold;
  }
`;

const LabelError = styled.label`
  font-size: 14px;
  color: red;
  text-align: center;
`;

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/profile");
  };

  return (
    <Container>
      <Content>
        <Title>Realize seu login</Title>
        <StyledInput
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <StyledInput
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        {error && <LabelError>{error}</LabelError>} {/* Exibe o erro, se houver */}
        <StyledButton onClick={handleLogin}>Entrar</StyledButton>
        <LabelSignup>
          Não tem uma conta? <Link to="/signup">Registre-se</Link>
        </LabelSignup>
      </Content>
    </Container>
  );
};

export default Signin;

