import React from 'react'
import styled from 'styled-components'

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  color: red;
  background-color: #fff;
`;

const TitleStyle = styled.h2`
  text-align: center;
`;

const ArticleStyle = styled.article`
  display: flex;
  flex-direction: row; /* Coloca o parágrafo e a imagem lado a lado */
  justify-content: space-between;
  align-items: center; /* Alinha o conteúdo verticalmente */
  max-width: 100%; /* Ajusta a largura máxima */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%; /* Largura do contêiner de texto */
`;

const SubtitleStyle = styled.h3`
  text-align: left;
  margin-bottom: 0; /* Remove o espaçamento inferior */
`;

const ParagraphStyle = styled.p`
  color: #000;
  margin-top: 0; /* Remove o espaçamento superior */
`;

const ImageStyle = styled.img`
  width: 320px; /* Ajusta o tamanho da imagem */
  height: 333px;
  object-fit: cover; /* Garante que a imagem mantenha proporção */
`;

function AboutUS() {
  return (
    <SectionStyle>
      <TitleStyle>SOBRE NÓS</TitleStyle>
      <ArticleStyle>
        <TextContainer>
          <SubtitleStyle>NOSSAS MOTIVAÇÕES</SubtitleStyle>
          <ParagraphStyle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel placerat mi. Sed quis rhoncus risus. Fusce facilisis quam eget laoreet blandit. Morbi auctor iaculis dapibus. Vivamus egestas enim sit amet ipsum euismod, sed congue orci interdum. Donec tempor leo et diam bibendum, quis pellentesque tellus dictum. In rutrum sit amet dolor a fermentum. Sed convallis est fringilla, auctor diam nec, ullamcorper augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </ParagraphStyle>
        </TextContainer>
        <ImageStyle src="https://placehold.co/320x333" alt="Imagem sobre nós" />
      </ArticleStyle>
    </SectionStyle>
  );
}
export default AboutUS
