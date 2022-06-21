import React from "react";
import styled from 'styled-components';
import Info from "./info";
import BackImg from '../../asset/images/footer_img.jpg';

const Container=styled.div`
    width: 100%;
    height: 560px;
    position:relative;
    background-color: black;
    overflow: hidden;
`
const FooterBar=styled.div`
    width: 100%;
    height:170px;
    background-image:url(${BackImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

function Footer(){
    return(
        <Container>
            <FooterBar></FooterBar>
            <Info/>
        </Container>
    );
}

export default Footer;