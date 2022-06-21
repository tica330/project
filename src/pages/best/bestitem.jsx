import React from "react";
import styled from 'styled-components';


const ProBest = styled.div`
  margin-top:70px;
  text-align: center;
  padding:0 50px 100px 50px;
`
const ItemBlock = styled.div`
  display:inline-block;
  margin:5px;
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

function BestItem(){
    const items = [    
        {
            id: 1,
            src:'https://unicorn.lush.com/media/__sized__/products/disco_duck_bath_bomb_2022_side__fff6c894-thumbnail-255x255.png',
            maintitle: 'Disco Duck',
            subtitle: 'Bath Bomb',
            price: '15,000원',
            review:'★★★☆☆'
        },
        {
          id: 2,
          src:'https://unicorn.lush.com/media/__sized__/products/dirty_bath_bomb_2022_50be3204-thumbnail-255x255.png',
          maintitle: 'Dirty',
          subtitle: 'Bath Bomb',
          price: '17,000원',
          review:'★★★★★'
        },
        {
          id: 3,
          src:'https://unicorn.lush.com/media/__sized__/products/relax_gift_pr_new_ribbon_2021-thumbnail-255x255.png',
          maintitle: 'relax',
          subtitle: 'GIFT',
          price: '70,000원',
          review:'★★★★☆'
        },
        {
          id: 4,
          src:'https://unicorn.lush.com/media/__sized__/products/herbalism_fresh_cleanser-thumbnail-255x255.png',
          maintitle: 'herbalism',
          subtitle: 'Cleanser',
          price: '22,000원',
          review:'★★★☆☆'
        },
        {
          id: 5,
          src:'https://unicorn.lush.com/media/__sized__/products/dream_cream_body_lotion_sp_2020-thumbnail-255x255.png',
          maintitle: 'Dream cream',
          subtitle: 'Body Lotion',
          price: '14,000원',
          review:'★★★☆☆'
        },
        {
          id: 6,
          src:'https://unicorn.lush.com/media/__sized__/products/intergalactic_bath_bomb_2021-thumbnail-255x255.png',
          maintitle: 'intergalactic',
          subtitle: 'Bath Bomb',
          price: '17,000원',
          review:'★★★☆☆'
        },
        {
          id: 7,
          src:'https://unicorn.lush.com/media/__sized__/products/black_rose_bath_bomb_2021_a40703ce-thumbnail-255x255.png',
          maintitle: 'black rose',
          subtitle: 'Bath Bomb',
          price: '18,000원',
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

export  default BestItem; 