import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

// Hook personalizado para acessar o contexto de autenticação
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
};

export default useAuth;
