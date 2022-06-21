import React from "react";
import styled from 'styled-components';


const ProBest = styled.div`
    padding:0 50px 100px 50px;
    margin-top:70px;
    text-align: center;
  `;
  const ItemBlock = styled.div`
  margin:5px;
  padding-top:20px;
  display:inline-block;
  margin-bottom:70px;
  width:290px;
  height:350px;
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
`;

function SpaItem(){
    const items = [    
        {
          id: 1,
          src:'https://unicorn.lush.com/media/__sized__/products/tangled-commerce-thumbnail-255x255.png',
          maintitle: 'tnagle hair',
          subtitle: 'Spa Voucher',
          price: '70,000원',
          review:'★★★★★'
        },
        {
          id: 2,
          src:'https://unicorn.lush.com/media/__sized__/products/hard-day-commerce-thumbnail-255x255.png',
          maintitle: 'hard days night',
          subtitle: 'Spa Voucher',
          price: '200,000원',
          review:'★★★★☆'
        },
        {
          id: 3,
          src:'https://unicorn.lush.com/media/__sized__/products/tailor-made-commerce-thumbnail-255x255.png',
          maintitle: 'tailor made',
          subtitle: 'Spa Voucher',
          price: '130,000원',
          review:'★★★★☆'
        },
        {
          id: 4,
          src:'https://unicorn.lush.com/media/__sized__/products/good-hour-commerce-thumbnail-255x255.png',
          maintitle: 'thr good hour',
          subtitle: 'Spa Voucher',
          price: '200,000원',
          review:'★★★☆☆'
        },
        {
          id: 5,
          src:'https://unicorn.lush.com/media/__sized__/products/spell-spa-treatment-thumbnail-255x255.png',
          maintitle: 'the spell',
          subtitle: 'Spa Voucher',
          price: '130,000원',
          review:'★★★★☆'
        },
        {
          id: 6,
          src:'https://unicorn.lush.com/media/__sized__/products/sound-bath-commerce-thumbnail-255x255.png',
          maintitle: 'the sound bath',
          subtitle: 'Spa Voucher',
          price: '150,000원',
          review:'★★★★☆'
        },
        {
          id: 7,
          src:'https://unicorn.lush.com/media/__sized__/products/karma-commerce-thumbnail-255x255.png',
          maintitle: 'karma',
          subtitle: 'Spa Voucher',
          price: '380,000원',
          review:'★★★★★'
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
          <ItemBlock>
              <img src={items[4].src} alt={items[4].maintitle} width="60%" />
              <MainTxt>{items[4].maintitle} </MainTxt>
              <SubTxt>{items[4].subtitle}</SubTxt>
              <p>{items[4].price}</p>
              <p>{items[4].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
          </ItemBlock>
          <ItemBlock>
              <img src={items[5].src} alt={items[5].maintitle} width="60%" />
              <MainTxt>{items[5].maintitle} </MainTxt>
              <SubTxt>{items[5].subtitle}</SubTxt>
              <p>{items[5].price}</p>
              <p>{items[5].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
          </ItemBlock>
          <ItemBlock>
              <img src={items[6].src} alt={items[6].maintitle} width="60%" />
              <MainTxt>{items[6].maintitle} </MainTxt>
              <SubTxt>{items[6].subtitle}</SubTxt>
              <p>{items[6].price}</p>
              <p>{items[6].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
          </ItemBlock>
        </ProBest>
      </div>
    )
}

export  default SpaItem; 