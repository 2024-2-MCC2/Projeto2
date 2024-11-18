import React from "react"
import styled from "styled-components"
import FaqMain from "../ComplementPages/FaqMain"

const Title = styled.h1`
text-transform: uppercase;
color: #8b0000;
font-size: 80px;
text-align: center;
`
const SubText = styled.h2`
color: #0c0c0c;
font-size: 30px;
text-align: center;
margin-bottom: 50px;
text-decoration: underline;
`

function FAQ(){
    return(
        <div>
            <Title>FAQ</Title>
            <SubText>Tire suas dúvidas aqui</SubText>
            <FaqMain
               questions = {[
                {
                    pergunta: "Que projeto é esse?", 
                    resposta: "Esse site é um projeto do 2° Semestre do curso de Ciências da Computação da faculdade FECAP, da turma matutina.", 
                    link: "https://www.fecap.br/"
                },
                {
                    pergunta: "Quem fez esse projeto?", 
                    resposta: "Felipe Lin, Lucas Oliveira, Matheus Rossaneze, Pedro Maia e Phelipe Antonio.", 
                    link: "https://github.com/orgs/2024-2-MCC2/teams/grupo2"
                },
                {
                    pergunta: "Quem são vocês?", 
                    resposta: "Somos estudantes do curso de Ciências da Computação e no momento estamos no 2° Semestre.", 
                    link: "https://www.fecap.br/graduacao/ciencia-da-computacao/"
                },
                {
                    pergunta: "Onde consigo acessar o projeto de vocês?", 
                    resposta: "É possível encontrar este projeto e seu código no GitHub do projeto. Clique no botão abaixo para conferir mais.", 
                    link: "https://github.com/2024-2-MCC2/Projeto2"
                }
               ]}               
            />
        </div>
    )
}
export default FAQ