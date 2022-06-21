import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/footer.jsx";
import SpaItem from "./spaitem.jsx";
import BannerImg from '../../asset/images/spa_banner.jpg';

const Container = styled.div`
    margin:0 auto;
    width:100%;
    background-color:#fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Banner=styled.div`
    width: 100%;
    height:300px;
    margin-top:150px;
    background-image:url(${BannerImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color:#fff;
`;
const BannerTxt=styled.div`
    margin: 140px 0 0 80px;
    font-size:60px;
    font-family: handwritten;
`;
const BannerSub=styled.div`
    margin-left:80px;
    font-size:20px;
    font-family: handwritten;
    font-weight:600;
`;
function Spa(){
    return(
        <div>
            <Container>
                <Banner>
                    <BannerTxt>spa</BannerTxt>
                    <BannerSub>내몸의 오감을 깨워 진정한 휴식을 선사하세요</BannerSub>
                </Banner>
                <SpaItem/>
                <Footer/>
            </Container>
        </div>
    )
}

export default Spa;