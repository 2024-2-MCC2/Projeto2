import styled from "styled-components"

const Container = styled.div`
    max-width: 1000px;
    margin: 30px auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px; 
`
const ImageCard = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`

const StyledImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
`
const SubTitle = styled.h2`
    text-align: center;
    color: #000;
    margin: 0 0 5px 0;
    font-size: large;
`

function WhereDonateCard({ arraySelecionado }) {
    return (
        <div>
            <Container>
                {arraySelecionado.map((item) => (
                    <ImageCard key={item.id}> {/* Corrected to use lowercase "key" */}
                        <StyledImage src={item.src} alt={item.alt} />
                        <SubTitle>{item.title}</SubTitle>
                    </ImageCard>    
                ))}
            </Container>
        </div>
    )
}

export default WhereDonateCard
