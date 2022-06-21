import React from "react";
import styled from 'styled-components';
import BestItem from "./bestitem";
import Footer from "../../components/footer/footer";
import BannerImg from '../../asset/images/slide1.jpg';

const Contents = styled.div`
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

function Best(){
    return(
    <div>
     <Contents>
        {/* <Submn/> */}
        <Banner>
            <BannerTxt>best items</BannerTxt>
            <BannerSub>누구나 좋아하는 인기 제품을 만나보세요!</BannerSub>
        </Banner>
        <BestItem/>
        <Footer/>
     </Contents>  
     </div> 
    );
}

export default Best;