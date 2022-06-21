import React from "react";
import { Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Dirty from "./dirty.jsx";

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
const Sold = styled.div`
  opacity:0.4;
  }
`
const SoldOut = styled.button`
  border-radius:10px;
  width:100px;
  height:20px;
  font-size:14px;
  background-color:#ccc;
  color:#000;
  }
`

function NewItem(){
    const items = [    
        {
          id: 1,
          src:'https://unicorn.lush.com/media/__sized__/products/dirty_bath_bomb_2022_50be3204-thumbnail-255x255.png',
          maintitle: 'Dirty',
          subtitle: 'Bath Bomb',
          price: '17,000원',
          review:'★★★★★'
        },
        {
          id: 2,
          src:'https://unicorn.lush.com/media/__sized__/products/no_1_dad_bubble_bar_2022__547d4498-thumbnail-255x255.png',
          maintitle: 'no.1 dad',
          subtitle: 'Bubble Bar',
          price: '17,000원',
          review:'★★★★☆'
        },
        {
          id: 3,
          src:'https://unicorn.lush.com/media/__sized__/products/superdad_eye_pad_2022__d60a3963-thumbnail-255x255.png',
          maintitle: 'superdad eye rad',
          subtitle: 'Eye Mask',
          price: '17,000원',
          review:'☆☆☆☆☆'
        },
        {
          id: 4,
          src:'https://unicorn.lush.com/media/__sized__/products/big_moustache_soap_2022_884b8ead-thumbnail-255x255.png',
          maintitle: 'big moustache',
          subtitle: 'Soap',
          price: '17,000원',
          review:'★★★☆☆'
        },
        {
          id: 5,
          src:'https://unicorn.lush.com/media/__sized__/products/eid_knot_wrap_2022_dea624bb-thumbnail-255x255.png',
          maintitle: 'the light within knot wrap',
          subtitle: 'GIFT Wrapping',
          price: '21,000원',
          review:'☆☆☆☆☆'
        },
        {
          id: 6,
          src:'https://unicorn.lush.com/media/__sized__/products/lets_get_to_crumble_pr_2022_573d2a5c-thumbnail-255x255.png',
          maintitle: `left's get raedy to crumble`,
          subtitle: 'GIFT',
          price: '46,000원',
          review:'★★★★☆'
        },
        {
          id: 7,
          src:'https://unicorn.lush.com/media/__sized__/products/sticky_dates_shower_gel_2022_867762ce-thumbnail-255x255.png',
          maintitle: 'sticky dates',
          subtitle: 'Shower Gel',
          price: '19,000원',
          review:'★★★★★'
        },
        {
          id: 8,
          src:'https://unicorn.lush.com/media/__sized__/products/light_the_night_bath_bomb_2022_93aae2ce-thumbnail-255x255.png',
          maintitle: 'light the night',
          subtitle: 'Bath Bomb',
          price: '19,000원',
          review:'★★★★☆'
        },
        {
          id: 9,
          src:'https://unicorn.lush.com/media/__sized__/products/deep_blue_sea_gift_pr_2022_139dbf25-thumbnail-255x255.png',
          maintitle: 'deep blue sea',
          subtitle: 'GIFT',
          price: '35,000원',
          review:'★★★★☆'
        },
        {
          id: 10,
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
              <Link to='./dirty'>
                <img src={items[0].src} alt={items[0].maintitle} width="60%"/>
                <MainTxt>{items[0].maintitle} </MainTxt>
                  <SubTxt>{items[0].subtitle}</SubTxt>
                  <p>{items[0].price}</p>
                  <p>{items[0].review}</p>
                <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
              </Link>
              <Route path="./dirty" exact component={Dirty}/>
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
          <ItemBlock>
              <img src={items[7].src} alt={items[7].maintitle} width="60%" />
              <MainTxt>{items[7].maintitle} </MainTxt>
              <SubTxt>{items[7].subtitle}</SubTxt>
              <p>{items[7].price}</p>
              <p>{items[7].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
          </ItemBlock>
          <ItemBlock>
              <Sold><img src={items[8].src} alt={items[8].maintitle} width="60%"/></Sold>
              <MainTxt>{items[8].maintitle} </MainTxt>
              <SubTxt>{items[8].subtitle}</SubTxt>
              <p>{items[8].price}</p>
              <p>{items[8].review}</p>
              <Button><SoldOut>Sold Out</SoldOut></Button>
          </ItemBlock>
          <ItemBlock>
              <img src={items[9].src} alt={items[9].maintitle} width="60%" />
              <MainTxt>{items[9].maintitle} </MainTxt>
              <SubTxt>{items[9].subtitle}</SubTxt>
              <p>{items[9].price}</p>
              <p>{items[9].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
          </ItemBlock>
        </ProBest>
      </div>
    )
}

export  default NewItem; 