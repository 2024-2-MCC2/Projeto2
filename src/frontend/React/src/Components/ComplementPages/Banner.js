import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import image from '../../Assets/parallax1.jpg'

const BannerContainer = styled.div`
   background-image: url(${image});
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
`
const BannerText = styled.div`
   width: 500px;
   text-align: center;
   color: #fff;
`
const Button = styled.button`
   background-color: red;
   border: none;
   padding: 12px;
   cursor: pointer;
   border-radius: 15px;
   color: #fff;
   margin-top: 20px; /* Adiciona um espaço entre o texto e o botão */
`

function Banner() {
   const navigate = useNavigate()

   const handleDonateClick = () => {
      navigate('/WantDonate')
   }

   return (
      <BannerContainer>
         <BannerText>
            <h1>Doe sangue, doe vida</h1>
            <p>Encontre os pontos de doação mais próximos de sua casa e faça diferença na vida de alguém!</p>
            <Button onClick={handleDonateClick}>QUERO DOAR</Button>
         </BannerText>
      </BannerContainer>
   )
}

export default Banner