import styled from "styled-components"
import AreaLocaisProximos from "./AreaLocaisProximos"
import ReactDOM from 'react-dom/client'

const LocaisProximosContainer = styled.div`
display: block;
border: solid 1px;
border-radius: 8px;
height: 40vh;
width: 40vw;
margin: 8px;
background-color: #8b0000;
`



function LocaisProximos() {

    return (
        <LocaisProximosContainer>
            <AreaLocaisProximos></AreaLocaisProximos>
        </LocaisProximosContainer>
    )
}

export default LocaisProximos