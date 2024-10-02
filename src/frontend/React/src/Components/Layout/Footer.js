import styled from "styled-components"

const FooterContainer = styled.footer`
    background-color: #000; 
    color: #fff; 
    padding: 1em;
    height: 15vh; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
`
const RightsText = styled.p`
    margin-top: 1em;
    font-size: 14px; 
`

function Footer() {
    return (
        <FooterContainer>
            <RightsText>FECAP - © 2024 Todos os direitos reservados</RightsText>
        </FooterContainer>
    )
}
export default Footer

