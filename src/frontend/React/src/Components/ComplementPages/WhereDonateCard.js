import styled from "styled-components";

const Container = styled.div`
    max-width: 100%;
    margin: 30px auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Centraliza os itens */
    gap: 20px;
`;

const ImageCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    width: 200px; /* Definir uma largura fixa para as cartas */
`;

const StyledImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const SubTitle = styled.h2`
    text-align: center;
    color: #000;
    margin: 0 0 5px 0;
    font-size: large;
`;

function WhereDonateCard({ arraySelecionado }) {
    return (
        <Container>
            {arraySelecionado.map((item) => (
                <ImageCard key={item.id}>
                    <StyledImage src={item.src} alt={item.alt} />
                    <SubTitle>{item.title}</SubTitle>
                </ImageCard>
            ))}
        </Container>
    );
}

export default WhereDonateCard;
