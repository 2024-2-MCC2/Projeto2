import styled from "styled-components"
import ReactDOM from 'react-dom/client'

function AreaLocaisProximos() {

const RowContainer = styled.div`
    display: flex;
    width: 20wh;
    height: 20vh;
    justify-content: space-around;
`

const LocaisContainer = styled.div`
    
`

const Locais = styled.div`
display: flex;
margin: 10px;
border-style: solid;
width: 100%;
border:solid 1px #8b0000;
justify-content: center;
border-radius: 10px;
align-items: center;
background-color: #fff;
`

function Football() {
    const shoot = () => {
      alert("Great Shot!");
    } 
      <h1 onClick={shoot}>Take the shot!</h1> 
  }

  
    return (
        <LocaisContainer>
            <RowContainer>
                <Locais>Rua Do C#</Locais>
                <Locais>Rua do Python</Locais>
            </RowContainer>
            <RowContainer>
                <Locais>Rua do Assembly</Locais>
                <Locais>Rua do PC da Xuxa</Locais>
            </RowContainer>
        </LocaisContainer>
    )
} 

export default AreaLocaisProximos