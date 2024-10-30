import React from "react";
import styled from "styled-components";

const FormsDiv = styled.div`
align-items: center;
margin: 30px;
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const Input = styled.input`
  border-radius: 10px;
  padding: 10px; 
  margin-bottom: 10px;
  border: solid 1px #ccc;
  width: 600px; 
  font-size: 16px; 
  box-sizing: border-box; 
  transition: all 0.3s ease 0s;
  &:focus {
    border-color: #8b0000;
    box-shadow: 0px 0px 5px 2px rgba(139, 0, 0, 0.3);
    }
`
const InputMessage = styled.textarea`
  border-radius: 10px;
  padding: 10px; 
  margin: 20px 0 10px;
  height: 300px;
  border: solid 1px #ccc;
  width: 600px; 
  font-size: 16px; 
  box-sizing: border-box; 
  resize: none; 
  overflow: auto; 
  display: block; 
  transition: all 0.3s ease 0s;
  &:focus {
    box-shadow: 0px 0px 5px 2px rgba(139, 0, 0, 0.3);
    }
`
const SubmitButton = styled.button`
margin: 30px;
padding: 20px 50px;
border-radius: 20px;
border: solid 2px #8b0000;
background-color: #fff;
color: #8b0000;
font-size: 20px;
font-weight: bold;
text-transform: uppercase;
transition: all 0.3s ease 0s;
justify-self: center;
/* display: flex; */
&:hover{
    cursor: pointer;
    background-color: #8b0000;
    color: #fff;
}
`

function ContactForm(){
    return(
        <Form> 
            <Input type="text" maxLength="255" placeholder="Nome"/>
            <Input type="email" maxLength="255" placeholder="Email"/>
            <Input type="text" maxLength="11" placeholder="N° Telefone"/>
            <InputMessage type="text"  maxLength="1000" placeholder="Digite sua mensagem, feedback, crítica, elogio, o que quiser :)"/>
            <SubmitButton type="submit">ENVIAR</SubmitButton>
        </Form>
    )
}
export default ContactForm