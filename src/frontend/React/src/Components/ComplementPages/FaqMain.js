import styled from "styled-components";
import React, { useState } from 'react';

const Container = styled.div`
align-items: center;
justify-content: center;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
max-width: 1500px;
margin-bottom: 200px;
`
const Main = styled.main`
align-items: center;
justify-content: space-around;
display: flex;
flex-direction: column;
background-color: transparent;
border: 2px solid #8b0000;
height: 200px;
width: 300px;
border-radius: 10px;
margin: 15px;
padding: 5px;
transition: all 0.2s;
&:hover{
    scale: 1.05;
}
`
const Question = styled.h2`
text-align: center;
color: #8b0000;
`
const Answer = styled.p`
margin: 10px;
text-align: justify;
color: white;
`
const Button = styled.button`
margin: 10px 0;
padding: 12px;
font-weight: bold;
border: 1px solid #8b0000;
border-radius: 10px;
background-color: white;
color: #8b0000;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
    border-color: white;
    background-color: #8b0000;
    color: white
}
`
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`
const ModalContent = styled.div`
    background-color: white;
    padding: 3px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`
const SubBox = styled.div`
    height: 50vh;
    width: 100vh;
    background-color: #8b0000;  /* Red background color */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px; 
    align-items: center;
`
const LearnMoreButton =  styled.a`
        color: white;
        text-decoration: underline;
        font-size: 16px;
        cursor: pointer;
    `

function FaqMain({ questions }) {
    const [showModal, setShowModal] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleShowModal = (question) => {
        setActiveQuestion(question);
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
        setActiveQuestion(null);
    }

    return (
        <>
            <Container>
                {questions.map((question, index) => (
                    <Main key={index}>
                        <Question>{question.pergunta}</Question>
                        {/* <Answer>{question.resposta}</Answer> */}
                        <Button onClick={() => handleShowModal(question)}>
                            Ver Reposta
                        </Button>
                    </Main>
                ))}
            </Container>

            {showModal && (
                <ModalOverlay>
                    <ModalContent>
                        <SubBox>
                            <Question>{activeQuestion.pergunta}</Question>
                            <Answer>{activeQuestion.resposta}</Answer>
                            <LearnMoreButton onClick={() => window.open(activeQuestion.link, "_blank")}>
                                Clique aqui para visitar o site!
                            </LearnMoreButton>
                            <Button onClick={handleCloseModal}>Voltar</Button>
                        </SubBox>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    )
}
export default FaqMain