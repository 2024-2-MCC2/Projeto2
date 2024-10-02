import React from 'react'
import styled from 'styled-components'

const ParallaxBanner = styled.section`
     background-image: url('https://via.placeholder.com/1500x500');
     width: 100%;
     height: 500px;
     background-size: cover;
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