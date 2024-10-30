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
    width: calc(25% - 20px);
`
const StyledImage = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    border: solid 2px #000;
`
const SubTitle = styled.h2`
    text-align: center;
    color: #000;
    margin: 0 0 5px 0;
`
const Description = styled.p`
    text-align: center;
    margin-bottom: 10px;
    flex: 1;
`

function BloodBankCard({bloodbank}){
    return(
        <div>
            <Container>
                {bloodbank.map((bloodbank, index) => (
                    <ImageCard Key = {index}>
                        <StyledImage src = {bloodbank.src} alt = {bloodbank.alt}/>
                        <SubTitle>{bloodbank.title}</SubTitle>
                        <Description>{bloodbank.description}</Description>
                    </ImageCard>    
                ))}
            </Container>
        </div>
    )
}
export default BloodBankCard