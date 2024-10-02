import styled from "styled-components"
import BuildingImage from "../../Assets/BancodeSangue.jpg"

const Banner = styled.div`
    /* background-image: url('${BuildingImage}');
    width: 100%; 
    height: 500px; 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;  */
`;

function BloodBank() {
    return (
        <Banner>
            <h1 style={{ color: "white", textAlign: "center", paddingTop: "200px" }}>BANCO DE SANGUE</h1>
        </Banner>
    );   
}

export default BloodBank