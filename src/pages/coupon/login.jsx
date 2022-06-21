import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin:0 auto;
  width: 90%;
  text-align:center;
`;
const Id = styled.div`
  margin:200px 0 50px 0;
`;
const Log = styled.div`
  font-family: handwritten;
  font-size:40px;
  margin-bottom:50px
`;
const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 400px;
  height: 40px;
  margin:0 5px 10px 5px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const ButtonLogin = styled.div`
  font-family: handwritten;
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  margin:0 5px 10px 5px;
  display: inline-block;
  width:400px;
  height: 49px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #000;
`;
const ButtonJoin = styled.div`
  font-family: handwritten;
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: inline-block;
  width: 400px;
  height: 49px;
  cursor: pointer;
  margin:0 5px 10px 5px;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: rgb(188, 188, 188);
`;

function LoginForm() {

  return (
    <Container>
      <Id>
        <Log>login</Log>
        <Input
          id="id"
          name="id"
          placeholder="lush@example.com"/><br/>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="password"/><br/>
        <ButtonLogin>login</ButtonLogin><br/>
        <ButtonJoin>join us</ButtonJoin>
      </Id>
    </Container>
  );
}

export default LoginForm;