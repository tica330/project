import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/footer.jsx";
import BodyItem from "./bodyitem.jsx";
import BannerImg from '../../asset/images/slide2.jpg';

const Container = styled.div`
    width:100%;
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

function Body(){
    return(
        <div>
            <Container>
                <Banner>
                    <BannerTxt>Body</BannerTxt>
                    <BannerSub>늘 당신의 피부를 향긋하고 건강하게 빛내줄 거예요</BannerSub>
                </Banner>
                <BodyItem/>
                <Footer/>
            </Container>
        </div>
    )
}

export default Body;