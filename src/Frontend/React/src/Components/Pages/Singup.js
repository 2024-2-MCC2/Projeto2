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
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
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
  padding: 12px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d00000;
  }
`;

const LabelSignin = styled.div`
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

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/signin");
  };

  return (
    <Container>
      <Content>
        <Title>Realize seu cadastro</Title>
        <StyledInput
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <StyledInput
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <StyledInput
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <StyledButton onClick={handleSignup}>Cadastrar-se</StyledButton>
        <LabelSignin>
          Já tem uma conta? <Link to="/signin">Entre</Link>
        </LabelSignin>
      </Content>
    </Container>
  );
};

export default Signup;
