import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/footer.jsx";
import NewItem from "../new/newitem.jsx";
import BannerImg from '../../asset/images/slide3.jpg';

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
function New(){
    return(
        <div>
            <Container>
                <Banner>
                    <BannerTxt>New Products</BannerTxt>
                    <BannerSub>러쉬에서 새로운 제품들을 만나보세요!</BannerSub>
                </Banner>
                <NewItem/>
                <Footer/>
            </Container>
        </div>
    )
}

export default New;