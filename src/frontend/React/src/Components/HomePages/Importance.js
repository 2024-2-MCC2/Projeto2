import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.div`
     text-align: center;
     background-color: red;
     padding: 20px; /* Adicionei um padding para espaçar os elementos do contêiner */
`;

const Title = styled.h1`
     font-size: 1.5em;
     text-transform: uppercase;
     color: #fff;
`
const ArticlesTitle = styled.h3`
    font-size: 1em;
    color: red;
`
const ArticleContainer = styled.section`
     max-width: 100vw;
     display: flex;
     flex-direction: row;
     justify-content: center; /* Centraliza os artigos horizontalmente */

     @media(max-width: 768px){
        display: flex;
        flex-direction: column;
     }
`;

const Articles = styled.article`
     width: 26vw;
     height: 300px;
     background-color: #fff;
     align-items: center;
     margin: 20px;
     display: flex; /* Para centralizar o conteúdo dentro do artigo */
     border-radius: 20px;
     flex-direction: column; /* Permite que o conteúdo seja empilhado verticalmente */

     @media(max-width: 768px){
        width: 80vw;
        height: 200px;
     }
`;

const Button = styled.button`
   background-color: #fff;
   border: none;
   padding: 12px;
   cursor: pointer;
   border-radius: 15px;
   color: red;
`

function Importance() {
   return (
      <SectionContainer>
         <Title>Importância da doação</Title>
         <ArticleContainer>
            <Articles className="article-1">
                <ArticlesTitle>Motivo 1</ArticlesTitle>
            </Articles>

            <Articles className="article-2">
                <ArticlesTitle>Motivo 2</ArticlesTitle>
            </Articles>

            <Articles className="article-3">
                <ArticlesTitle>Motivo 3</ArticlesTitle>
            </Articles>
         </ArticleContainer>
         <Button>QUERO DOAR</Button>
      </SectionContainer>
   );
}

export default Importance