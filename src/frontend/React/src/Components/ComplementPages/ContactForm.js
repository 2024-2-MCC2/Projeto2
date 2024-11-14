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

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ff48850c-c368-4ac3-bd5a-a3be138decc3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <Form onSubmit={onSubmit}>
          <Input type="text" name="name" required placeholder="Nome"/>
          <Input type="email" name="email" required placeholder="Email"/>
          <InputMessage name="message" required placeholder="Digite sua Mensagem"></InputMessage>
  
          <SubmitButton type="submit">Submit Form</SubmitButton>
  
        </Form>
        <span>{result}</span>
  
      </div>
    );
  }