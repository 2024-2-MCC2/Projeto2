import React from 'react'
import styled from 'styled-components'
import image from '../../Assets/parallax2.jpg'

const ParallaxBanner = styled.section`
    background-image: url(${image});
    width: 100%;
    height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-attachment: fixed;
`

function ParallaxImage(){
    return(
       <ParallaxBanner>
       </ParallaxBanner>
    );
}

export default ParallaxImage