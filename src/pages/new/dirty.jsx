import React from "react";
import styled from 'styled-components';
import Footer from "../../components/footer/footer";

const Container=styled.div`
    width: 100%;
    height: 1000px;
    position:relative;
    background-color: black;
    overflow: hidden;
`;
const Test=styled.div`
    width:100%;
    height:700px;
    background-color:black;
    solid:5px solid red;
    font-size:200px;
`;

function Dirty(){
    return(
        <div>
            <Container>
                <Test>test</Test>
                <Footer/>
            </Container>
        </div>
    );
}
export default Dirty;