import { Fragment } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Profile from "../Pages/Profile";
import Signin from "../Pages/Singin";
import Signup from "../Pages/Singup";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <ul>
      <nav><Link to="/Profile">Perfil</Link></nav>
      <nav><Link to="/signin">Voltar</Link></nav>
      {/* <NavItem><Link to="/Contact">Contato</Link></NavItem> */}
    </ul>
  );
};

export default RoutesApp;