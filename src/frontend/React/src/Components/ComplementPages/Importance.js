import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SectionContainer = styled.div`
     text-align: center;
     background-color: red;
     padding: 20px;
`
const Title = styled.h1`
     font-size: 1.5em;
     text-transform: uppercase;
     color: #fff;
`
const ArticlesTitle = styled.h3`
    font-size: 1em;
    color: red;
    margin-bottom: 1px;
`
const ArticleContainer = styled.section`
     max-width: 100vw;
     display: flex;
     flex-direction: row;
     justify-content: center;

     @media(max-width: 768px){
        display: flex;
        flex-direction: column;
     }
`
const Articles = styled.article`
     width: 26vw;
     height: 300px;
     background-color: #fff;
     align-items: center;
     margin: 20px;
     display: flex;
     border-radius: 20px;
     flex-direction: column;
     @media(max-width: 768px){
        width: 80vw;
        height: 200px;
     }
`
const Button = styled.button`
   background-color: #fff;
   border: none;
   padding: 12px;
   cursor: pointer;
   border-radius: 15px;
   color: red;
`
const P = styled.p`
   font-size: 17px;
   font-family: Arial, Helvetica, sans-serif;
   padding: 0 20px;
   text-align: justify;
`

function Importance() {
   const navigate = useNavigate()

   const handleDonateClick = () => {
      navigate('/WantDonate')
   }

   return (
      <SectionContainer>
         <Title>Importância da doação</Title>
         <ArticleContainer>
            <Articles className="article-1">
                <ArticlesTitle>Salvar Vidas</ArticlesTitle>
                  <P>
                     Cada doação de sangue pode ajudar a salvar até três vidas. O sangue é essencial para transfusões em situações de emergência, como acidentes, cirurgias e tratamento de doenças como câncer. A disponibilidade de sangue pode ser a diferença entre a vida e a morte para pacientes que necessitam urgentemente desse recurso.
                  </P>
            </Articles>
            <Articles className="article-2">
                <ArticlesTitle>Benefícios para a saúde do doador</ArticlesTitle>
                  <P>
                     A doação de sangue pode trazer benefícios à saúde do doador. Estudos sugerem que a doação regular  pode ajudar a reduzir o risco de doenças cardíacas e de alguns tipos de câncer. Além disso, os   doadores são submetidos a exames de saúde antes da doação, o que pode ajudar a identificar  problemas de saúde que, de outra forma, poderiam passar despercebidos.
                  </P>
            </Articles>
            <Articles className="article-3">
                <ArticlesTitle>Solidariedade e comunidade</ArticlesTitle>
                  <P>
                     Doar sangue é uma forma de contribuir para a comunidade e apoiar aqueles que estão passando por momentos difíceis. Ao se tornar um doador, você faz parte de um esforço coletivo que promove a saúde pública. A doação de sangue ajuda a criar um senso de solidariedade e união entre as pessoas, mostrando que pequenas ações podem ter um grande impacto no bem-estar da sociedade.
                  </P>
            </Articles>
         </ArticleContainer>
         <Button onClick={handleDonateClick}>QUERO DOAR</Button>
      </SectionContainer>
   )
}
export default Importance

