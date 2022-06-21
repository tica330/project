import React from "react";
import styled from 'styled-components';


const ProBest = styled.div`
    padding:0 50px 100px 50px;
    margin-top:70px;
    text-align: center;
  `;
  const ItemBlock = styled.div`
  margin:5px;
  display:inline-block;
  margin-bottom:70px;
  width:290px;
  height:320px;
  box-sizing:border-box;
  border-radius:10px;
  text-align:center;
  cursor:pointer;
  &:hover{
    background-color: rgb(235, 235, 235);
    transition:0.5s;
  }
`
const MainTxt = styled.div`
  font-family: handwritten;
  font-size: 22px;
`
const SubTxt = styled.div`
  color:#6f6f6f;
  font-size:14px;
  margin-bottom:5px;
`
const Button = styled.div`
  margin-top:-12px;
`
const Gift = styled.button`
  border-radius:10px;
  width:80px;
  height:20px;
  font-size:14px;
  background-color:#000;
  color:#fff;
  &:hover{
    background-color:#fff;
    color:#000;
    transition:0.5s;
  }
`
const Card = styled.button`
  border-radius:10px;
  width:80px;
  height:20px;
  font-size:14px;
  background-color:#000;
  color:#fff;
  &:hover{
    background-color:#fff;
    color:#000;
    transition:0.5s;
  }
`

function HairItem(){
    const items = [    
        {
          id: 1,
          src:'https://unicorn.lush.com/media/__sized__/products/daddy_o_shampoo_2022_41063f38-thumbnail-255x255.png',
          maintitle: 'daddy-o',
          subtitle: 'Shampoo',
          price: '19,000원',
          review:'★★★★★'
        },
        {
          id: 2,
          src:'https://unicorn.lush.com/media/__sized__/products/honey_i_washed_my_hair_shampoo_bar_2020_163b7de1-thumbnail-255x255.png',
          maintitle: 'honet i washed my wair',
          subtitle: 'Shampoo Bar',
          price: '19,000원',
          review:'★★★★☆'
        },
        {
          id: 3,
          src:'https://unicorn.lush.com/media/__sized__/products/wasabi_shan_kui_shampoo_2020-thumbnail-255x255.png',
          maintitle: 'wasabi shan kui',
          subtitle: 'Shampoo',
          price: '26,000원',
          review:'★★★★☆'
        },
        {
          id: 4,
          src:'https://unicorn.lush.com/media/__sized__/products/flyway_hair_shampoo_bar_2020_dfeb4359-thumbnail-255x255.png',
          maintitle: 'flyway hair',
          subtitle: 'Shampoo Bar',
          price: '19,000원',
          review:'★★★☆☆'
        }
      ];  
    return(
      <div>
        <ProBest>
            <ItemBlock>
              <img src={items[0].src} alt={items[0].maintitle} width="60%"/>
              <MainTxt>{items[0].maintitle} </MainTxt>
                <SubTxt>{items[0].subtitle}</SubTxt>
                <p>{items[0].price}</p>
                <p>{items[0].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
          <ItemBlock>
              <img src={items[1].src} alt={items[1].maintitle} width="60%"/>
              <MainTxt>{items[1].maintitle} </MainTxt>
              <SubTxt>{items[1].subtitle}</SubTxt>
              <p>{items[1].price}</p>
              <p>{items[1].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
          </ItemBlock>
          <ItemBlock>
              <img src={items[2].src} alt={items[2].maintitle} width="60%" />
              <MainTxt>{items[2].maintitle} </MainTxt>
              <SubTxt>{items[2].subtitle}</SubTxt>
              <p>{items[2].price}</p>
              <p>{items[2].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
          </ItemBlock>
          <ItemBlock>
                <img src={items[3].src} alt={items[3].maintitle} width="60%" />
                <MainTxt>{items[3].maintitle} </MainTxt>
                <SubTxt>{items[3].subtitle}</SubTxt>
                <p>{items[3].price}</p>
                <p>{items[3].review}</p>
                <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
          </ItemBlock>
        </ProBest>
      </div>
    )
}

export  default HairItem; 