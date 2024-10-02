import React from "react"
import styled from "styled-components"

const BarraDePesquisa = styled.input`
width: 400px;
padding: 10px;
border-radius: 10px;
border: solid 1px;
margin: 8px;
` 
const BotaoPesquisar = styled.button`
border: solid 3px #8b0000;
background-color: #fff;
color: #8b0000;
font-weight: bold;
text-transform: uppercase;
transition: all 0.2s ease 0s;
border-radius: 10px;
padding: 10px;
&:hover{
    cursor: pointer;
    background-color: #8b0000;
    color: #fff;
}
`
const PesquisaContainer = styled.div`

`

function Formulario() {
    return (
        <PesquisaContainer>
            <BarraDePesquisa placeholder="Digite o seu endereço"></BarraDePesquisa>
            <BotaoPesquisar>Pesquisar</BotaoPesquisar>
        </PesquisaContainer>
    )
}

export default Formulario