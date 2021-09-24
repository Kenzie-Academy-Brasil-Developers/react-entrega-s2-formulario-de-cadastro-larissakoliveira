import styled from "styled-components"
import WelcomeImg from '../../assets/welcome'

export const Container = styled.div`
    background-image: url(${WelcomeImg});
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: contain;
    min-width: 100vw;
    min-height: 100vh;
    h1{
        font-size: 36px;
        color: black;
    }
    button{
        font-size: 18px;
    }
 
`