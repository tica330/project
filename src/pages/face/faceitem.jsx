import React from "react";
import styled from 'styled-components';


const ProBest = styled.div`
    margin-top:70px;
    text-align: center;
    padding:0 50px 100px 50px;
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
function FaceItem(){
    const items = [    
        {
          id: 1,
          src:'https://unicorn.lush.com/media/__sized__/products/coalface_facial_soap_2020_418565a4-thumbnail-255x255.png',
          maintitle: 'charcoal',
          subtitle: 'Facial Soap',
          price: '22,000원',
          review:'★★★★☆'
        },
        {
          id: 2,
          src:'https://unicorn.lush.com/media/__sized__/products/herbalism_fresh_cleanser-thumbnail-255x255.png',
          maintitle: 'herbalism',
          subtitle: 'Cleanser',
          price: '22,000원',
          review:'★★★★☆'
        },
        {
          id: 3,
          src:'https://unicorn.lush.com/media/__sized__/products/dont_look_at_me_fresh_face_mask_2020-thumbnail-255x255.png',
          maintitle: `don't look at me`,
          subtitle: 'Face Mask',
          price: '25,000원',
          review:'★★★★★'
        },
        {
          id: 4,
          src:'https://unicorn.lush.com/media/__sized__/products/tea_tree_water_toner_water_2020-thumbnail-255x255.png',
          maintitle: 'tea tree water',
          subtitle: 'Toner Water',
          price: '16,000원',
          review:'★★★★☆'
        },
        {
          id: 5,
          src:'https://unicorn.lush.com/media/__sized__/products/ocean_salt_scrub_2022_3927b2d6-thumbnail-255x255.png',
          maintitle: 'ocean sal',
          subtitle: 'Face & Body Scrub',
          price: '28,000원',
          review:'★★★★☆'
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
        </ProBest>
      </div>
    )
}

export  default FaceItem; 