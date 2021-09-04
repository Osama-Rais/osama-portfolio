import React from "react"
import styled,{keyframes} from "styled-components"

function TextAnimation(){
    return(
        <Wrapper>About </Wrapper>
    )
}

const animation = keyframes`
0%   { opactiy: 0; }
100% {opacity:1;}
`

const Wrapper = styled.span`
opacity:0;
animation-name:${animation}
animation-duration:6s;
`

export default TextAnimation;
