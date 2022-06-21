import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/footer.jsx";
import HairItem from "./hairitem.jsx";
import BannerImg from '../../asset/images/hair_banner.jpg';

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
                    <BannerTxt>hair</BannerTxt>
                    <BannerSub>실리콘 성분 없이 건강한 재료만 담아 매일 더 싱그럽게</BannerSub>
                </Banner>
                <HairItem/>
                <Footer/>
            </Container>
        </div>
    )
}

export default New;