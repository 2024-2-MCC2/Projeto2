import Formulario from "../WantDonatePages/Formulario"
import FormularioFoto from "../WantDonatePages/FormularioFoto"
import LocaisProximos from "../WantDonatePages/LocaisProximos"
import styled from "styled-components"

const FormularioContainer = styled.div`
display: flex;
background-color: #fff;
`


const SecaoContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 50vw;
justify-content: center;
align-items: center;
`

const FormTitle = styled.h1`
font-weight: bold;
font-size: 2em;
color: #8b0000;
`

function WantDonate() {
  return (
    <FormularioContainer>
      <SecaoContainer>
        <FormTitle>Quero Doar!</FormTitle>
        <Formulario/>
        <LocaisProximos/>
      </SecaoContainer>
      <SecaoContainer>
        <FormularioFoto/>
      </SecaoContainer>
    </FormularioContainer>
  )
}
export default WantDonate