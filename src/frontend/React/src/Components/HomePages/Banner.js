import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
   background-image: url('https://via.placeholder.com/1500x500');
   background-size: cover;
   background-attachment: fixed;
   background-repeat: no-repeat;
   background-position: center;
   display: flex;
   flex-direction: column;
   justify-content: center; /* Centraliza verticalmente */
   align-items: center; /* Centraliza horizontalmente */
   height: 500px;
   width: 100%;
`;

const BannerText = styled.div`
   width: 500px;
   text-align: center;
   color: #fff;
`;

const Button = styled.button`
   background-color: red;
   border: none;
   padding: 12px;
   cursor: pointer;
   border-radius: 15px;
   color: #fff;
   margin-top: 20px; /* Adiciona um espaço entre o texto e o botão */
`;

function Banner() {
   return (
      <BannerContainer>
         <BannerText>
            <h1>Doe sangue, doe vida</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida facilisis fringilla. Maecenas feugiat nibh et quam congue, in ultricies purus rutrum.</p>
            <Button>QUERO DOAR</Button>
         </BannerText>
      </BannerContainer>
   );
}

export default Banner