import { Link } from "react-router-dom";
import Container from "./Container";
import styled from "styled-components";

const NavModules = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    background-color: #8b0000;
    padding: 1em;
    height: 12vh; 
`;
const UlModules = styled.ul` 
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;
    flex-grow: 0.5;
    justify-content: space-around; 
`;
const NavItem = styled.li`
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 18px;

    a {
        color: #fff;
        text-decoration: none; 
        
        &:hover { 
            color: #a9a9a9; 
        }
    }
`;
const LogoLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: bold; /* Adicionado para destaque */
    font-size: 24px; /* Tamanho maior para o logo */
`;

function NavBar() {
    return (
        <NavModules>
            <Container>
                <LogoLink to="/">Logo</LogoLink>
                <UlModules>
                    <NavItem><Link to="/WantDonate">Quero Doar</Link></NavItem>
                    <NavItem><Link to="/WhereDonate">Onde Doar</Link></NavItem>
                    <NavItem><Link to="/BloodBank">Banco de Sangue</Link></NavItem>
                    <NavItem><Link to="/Contact">Contato</Link></NavItem>
                    <NavItem><Link to="/FAQ">FAQ</Link></NavItem>
                </UlModules>
            </Container>
        </NavModules>
    );
}
export default NavBar;


