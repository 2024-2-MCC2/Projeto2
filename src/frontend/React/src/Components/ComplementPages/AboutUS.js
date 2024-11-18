import React from 'react'
import styled from 'styled-components'
import image from '../../Assets/foto-projeto.jpg'

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  color: red;
  background-color: #fff;
`
const TitleStyle = styled.h2`
  text-align: center;
`
const ArticleStyle = styled.article`
  display: flex;
  flex-direction: row; /* Coloca o parágrafo e a imagem lado a lado */
  justify-content: space-between;
  align-items: center; /* Alinha o conteúdo verticalmente */
  max-width: 100%; /* Ajusta a largura máxima */
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%; /* Largura do contêiner de texto */
`
const SubtitleStyle = styled.h3`
  text-align: left;
  margin-bottom: 0; /* Remove o espaçamento inferior */
`
const ParagraphStyle = styled.p`
  color: #000;
  margin-top: 0; /* Remove o espaçamento superior */
`
const ImageStyle = styled.img`
  width: 460px; /* Ajusta o tamanho da imagem */
  height: 333px;
  object-fit: cover; /* Garante que a imagem mantenha proporção */
`

function AboutUS() {
  return (
    <SectionStyle>
      <TitleStyle>SOBRE NÓS</TitleStyle>
      <ArticleStyle>
        <TextContainer>
          <SubtitleStyle>NOSSAS MOTIVAÇÕES</SubtitleStyle>
          <ParagraphStyle>
          Nós escolhemos o tema da doação de sangue por reconhecer a importância vital dessa prática para salvar vidas. Frequentemente nos deparamos com notícias alarmantes sobre a insuficiência dos estoques de sangue em hospitais e hemocentros, especialmente durante períodos críticos do ano. Essa realidade nos inspirou a agir e desenvolver um site dedicado a facilitar a vida dos doadores. Nossa plataforma tem como objetivo ajudar os usuários a localizar os postos de coleta de sangue mais próximos, seja em suas residências ou onde quer que estejam. Acreditamos que, ao conectar as pessoas de maneira mais eficiente com esses locais, podemos contribuir significativamente para aumentar as doações e, consequentemente, salvar mais vidas.
          </ParagraphStyle>
        </TextContainer>
        <ImageStyle src = {image} alt="Imagem sobre nós" />
      </ArticleStyle>
    </SectionStyle>
  );
}
export default AboutUS
