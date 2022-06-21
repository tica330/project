import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/footer.jsx";
import GiftItem from "./giftitem.jsx";
import BannerImg from '../../asset/images/gift_banner.jpg';

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

function New(){
    return(
        <div>
            <Container>
                <Banner>
                    <BannerTxt>gift</BannerTxt>
                    <BannerSub>환경을 배려한 선물의 감동은 긴 여운을 남길 거에요</BannerSub>
                </Banner>
                <GiftItem/>
                <Footer/>
            </Container>
        </div>
    )
}

export default New;