import { createContext, useState, useEffect } from "react";

// Criando o AuthContext
export const AuthContext = createContext();

// Função para fornecer o contexto aos componentes
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado do usuário autenticado

  // Efeito para recuperar o usuário do localStorage
  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const user = JSON.parse(usersStorage)?.find(
        (user) => user.email === JSON.parse(userToken).email
      );
      if (user) setUser(user); // Se encontrado, define o usuário no estado
    }
  }, []);

  // Função de login
  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    const user = usersStorage?.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        const token = Math.random().toString(36).substring(2); // Gera um token
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser(user); // Atualiza o usuário no estado
        return null; // Sucesso
      } else {
        return "E-mail ou senha incorretos"; // Erro de senha
      }
    } else {
      return "Usuário não cadastrado"; // Erro de usuário não encontrado
    }
  };

  // Função de cadastro
  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || [];
    const user = usersStorage.find((user) => user.email === email);

    if (user) {
      return "Já tem uma conta com esse E-mail"; // Já existe um usuário com esse e-mail
    }

    const newUser = [...usersStorage, { email, password }];
    localStorage.setItem("users_bd", JSON.stringify(newUser)); // Armazena no localStorage
    return null; // Sucesso
  };

  // Função para obter o perfil do usuário
  const getProfile = () => {
    const userToken = JSON.parse(localStorage.getItem("user_token"));
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    if (userToken && usersStorage) {
      return usersStorage.find((user) => user.email === userToken.email);
    }
    return null; // Retorna null se não encontrar
  };

  // Função para atualizar o perfil do usuário
  const updateProfile = (newProfile) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    const userToken = JSON.parse(localStorage.getItem("user_token"));

    if (userToken && usersStorage) {
      const updatedUsers = usersStorage.map((user) =>
        user.email === userToken.email ? { ...user, ...newProfile } : user
      );
      localStorage.setItem("users_bd", JSON.stringify(updatedUsers));
      setUser({ ...user, ...newProfile }); // Atualiza o estado local
    }
  };

  // Função de logout
  const signout = () => {
    setUser(null); // Limpa o estado do usuário
    localStorage.removeItem("user_token"); // Remove o token
  };

  // Retorna o contexto com os dados e funções
  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signin,
        signup,
        signout,
        getProfile,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

