import React from "react"
import styled from "styled-components"
import ContactForm from "../ComplementPages/ContactForm"

const Title = styled.h1`
text-transform: uppercase;
font-size: 80px;
color: #8b0000;
font-weight: bold;
text-align: center;
`
const SubText = styled.h2`
color: #000;
font-size: 30px;
text-align: center;
text-decoration: underline;
`

function Contact(){
    return(
        <div>
            <Title>Contato</Title>
            <SubText>Entre em contato conosco:</SubText>
            <ContactForm/>
        </div>
        )

}

export default Contact