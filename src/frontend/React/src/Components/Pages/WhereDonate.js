import React, { useState } from "react"
import WhereDonateCard from "../ComplementPages/WhereDonateCard"
import image from "../../Assets/BancodeSangue.jpg"
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 9vh;
    align-items: center;
    justify-content: center; /* Centraliza os botões */
    gap: 20px; /* Espaço entre os botões */
`
const Button = styled.button`
    border: solid 2px #8b0000;
    background-color: #fff;
    color: #8b0000;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.2s ease 0s;
    border-radius: 10px;
    padding: 10px;
    &:hover {
        cursor: pointer;
        background-color: #8b0000;
        color: #fff;
    }
`

function WhereDonate() {
    const saopaulo = [
        { id: '1', src: image, alt: '1', title: "Endereço 1" },
        { id: '2', src: image, alt: '2', title: "Endereço 2" },
        { id: '3', src: image, alt: '3', title: "Endereço 3" },
        { id: '4', src: image, alt: '4', title: "Endereço 4" },
        { id: '5', src: image, alt: '5', title: "Endereço 5" },
        { id: '6', src: image, alt: '6', title: "Endereço 6" },
        { id: '7', src: image, alt: '7', title: "Endereço 7" },
        { id: '8', src: image, alt: '8', title: "Endereço 8" },
        { id: '9', src: image, alt: '9', title: "Endereço 9" },
        { id: '10', src: image, alt: '10', title: "Endereço 10" },
    ]
    const metropole = [
        { id: '1', src: image, alt: '1', title: "Endereço 0,1" },
        { id: '2', src: image, alt: '2', title: "Endereço 0,2" },
        { id: '3', src: image, alt: '3', title: "Endereço 0,3" },
        { id: '4', src: image, alt: '4', title: "Endereço 0,4" },
        { id: '5', src: image, alt: '5', title: "Endereço 0,5" },
        { id: '6', src: image, alt: '6', title: "Endereço 0,6" },
        { id: '7', src: image, alt: '7', title: "Endereço 0,7" },
        { id: '8', src: image, alt: '8', title: "Endereço 0,8" },
        { id: '9', src: image, alt: '9', title: "Endereço 0,9" },
        { id: '10', src: image, alt: '10', title: "Endereço 0,10" },
    ]
    const interior = [
        { id: '1', src: image, alt: '1', title: "Endereço /1" },
        { id: '2', src: image, alt: '2', title: "Endereço /2" },
        { id: '3', src: image, alt: '3', title: "Endereço /3" },
        { id: '4', src: image, alt: '4', title: "Endereço /4" },
        { id: '5', src: image, alt: '5', title: "Endereço /5" },
        { id: '6', src: image, alt: '6', title: "Endereço /6" },
        { id: '7', src: image, alt: '7', title: "Endereço /7" },
        { id: '8', src: image, alt: '8', title: "Endereço /8" },
        { id: '9', src: image, alt: '9', title: "Endereço /9" },
        { id: '10', src: image, alt: '10', title: "Endereço /10" },
    ]

    const [arraySelecionado, setArraySelecionado] = useState(saopaulo)

    function SaoPaulo() {
        setArraySelecionado(saopaulo)
    }
    function Metropole() {
        setArraySelecionado(metropole)
    }
    function Interior() {
        setArraySelecionado(interior)
    }

    return (
        <>
            <Div>
                <Button onClick={SaoPaulo}>São Paulo</Button>
                <Button onClick={Metropole}>Metrópole</Button>
                <Button onClick={Interior}>Interior</Button>
            </Div>
            <WhereDonateCard arraySelecionado={arraySelecionado} />
        </>
    )
}
export default WhereDonate
