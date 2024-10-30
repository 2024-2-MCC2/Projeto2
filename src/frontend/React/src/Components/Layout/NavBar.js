import { Link } from "react-router-dom"
import Container from "./Container"
import styled from "styled-components"
import image from "../../Assets/logo_sanguessugas.png"

const NavModules = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #8b0000;
    padding: 1em;
    height: 12vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; 
`
const UlModules = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;
    flex-grow: 0.5;
    justify-content: space-around;
`
const NavItem = styled.li`
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            color: #a9a9a9;
        }
    }
`
const MainContent = styled.div`
    padding-top: 12vh; /* Compensa a altura do menu fixo */
`

function NavBar() {
    return (
        <>
            <NavModules>
                <Container>
                    <a href="/">
                        <img src={image} alt="Logo" />
                    </a>
                    <UlModules>
                        <NavItem><Link to="/WantDonate">QUERO DOAR</Link></NavItem>
                        <NavItem><Link to="/WhereDonate">ONDE DOAR</Link></NavItem>
                        <NavItem><Link to="/BloodBank">Banco de Sangue</Link></NavItem>
                        <NavItem><Link to="/Contact">Contato</Link></NavItem>
                        <NavItem><Link to="/FAQ">FAQ</Link></NavItem>
                    </UlModules>
                </Container>
            </NavModules>          
            <MainContent/>    
        </> 
    )
}
export default NavBar