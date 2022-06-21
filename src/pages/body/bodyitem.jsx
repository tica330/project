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

function BodyItem(){
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
          src:'https://unicorn.lush.com/media/__sized__/products/sticky_dates_shower_gel_2022_867762ce-thumbnail-255x255.png',
          maintitle: 'sticky dates',
          subtitle: 'Shower Gel',
          price: '19,000원',
          review:'★★★★★'
        },
        {
          id: 6,
          src:'https://unicorn.lush.com/media/__sized__/products/light_the_night_bath_bomb_2022_93aae2ce-thumbnail-255x255.png',
          maintitle: 'light the night',
          subtitle: 'Bath Bomb',
          price: '19,000원',
          review:'★★★★☆'
        },
        {
          id: 7,
          src:'https://unicorn.lush.com/media/__sized__/products/black_rose_bath_bomb_2021_a40703ce-thumbnail-255x255.png',
          maintitle: 'black rose',
          subtitle: 'Bath Bomb',
          price: '18,000원',
          review:'★★★★☆'
        },
        {
            id: 8,
            src:'https://unicorn.lush.com/media/__sized__/products/ceridwens_cauldron_bath_oil_2020_8937adec-thumbnail-255x255.png',
            maintitle: `ceridwen's cauldron`,
            subtitle: 'Bath Oil',
            price: '18,000원',
            review:'★★★★☆'
        },
        {
          id: 9,
          src:'https://unicorn.lush.com/media/__sized__/products/scubee_body_scrub_top_2020_e32d3a46-thumbnail-255x255.png',
          maintitle: 'scrubee',
          subtitle: 'Body Butter',
          price: '20,000원',
          review:'★★★☆☆'
        },
        {
          id: 10,
          src:'https://unicorn.lush.com/media/__sized__/products/aromaco_solid_deodorant_2020_117b17c1-thumbnail-255x255.png',
          maintitle: 'aromaco',
          subtitle: 'Deodorant',
          price: '20,000원',
          review:'★★★★★'
        },
        {
          id: 11,
          src:'https://unicorn.lush.com/media/__sized__/products/beauty_sleep_face_and_body_mask_2020-thumbnail-255x255.png',
          maintitle: 'beauty sleep',
          subtitle: 'Face & Body Mask',
          price: '30,000원',
          review:'★★★★☆'
        },
        {
          id: 12,
          src:'https://unicorn.lush.com/media/__sized__/products/buffy_body_scrub_2020-thumbnail-255x255.png',
          maintitle: 'buffy',
          subtitle: 'Body Scrub',
          price: '19,000원',
          review:'★★★☆☆'
        },
        {
          id: 13,
          src:'https://unicorn.lush.com/media/__sized__/products/sleepy_dusting_powder_2021-thumbnail-255x255.png',
          maintitle: 'sleepy dust',
          subtitle: 'Dusting Powder',
          price: '20,000원',
          review:'★★★★☆'
        },
        {
          id: 14,
          src:'https://unicorn.lush.com/media/__sized__/products/disco_duck_bath_bomb_2022_side__fff6c894-thumbnail-255x255.png',
          maintitle: 'Disco Duck',
          subtitle: 'Bath Bomb',
          price: '15,000원',
          review:'★★★☆☆'
      },
      {
        id: 15,
        src:'https://unicorn.lush.com/media/__sized__/products/dream_cream_body_lotion_sp_2020-thumbnail-255x255.png',
        maintitle: 'Dream cream',
        subtitle: 'Body Lotion',
        price: '14,000원',
        review:'★★★☆☆'
      },
      {
        id: 16,
        src:'https://unicorn.lush.com/media/__sized__/products/intergalactic_bath_bomb_2021-thumbnail-255x255.png',
        maintitle: 'intergalactic',
        subtitle: 'Bath Bomb',
        price: '17,000원',
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
              <img src={items[6].src} alt={items[6].maintitle} width="60%"/>
              <MainTxt>{items[6].maintitle} </MainTxt>
                <SubTxt>{items[6].subtitle}</SubTxt>
                <p>{items[6].price}</p>
                <p>{items[6].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
            <ItemBlock>
              <img src={items[7].src} alt={items[7].maintitle} width="60%"/>
              <MainTxt>{items[7].maintitle} </MainTxt>
                <SubTxt>{items[7].subtitle}</SubTxt>
                <p>{items[7].price}</p>
                <p>{items[7].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
            <ItemBlock>
              <img src={items[8].src} alt={items[8].maintitle} width="60%"/>
              <MainTxt>{items[8].maintitle} </MainTxt>
                <SubTxt>{items[8].subtitle}</SubTxt>
                <p>{items[8].price}</p>
                <p>{items[8].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
            <ItemBlock>
              <img src={items[9].src} alt={items[9].maintitle} width="60%"/>
              <MainTxt>{items[9].maintitle} </MainTxt>
                <SubTxt>{items[9].subtitle}</SubTxt>
                <p>{items[9].price}</p>
                <p>{items[9].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
            <ItemBlock>
              <img src={items[10].src} alt={items[10].maintitle} width="60%"/>
              <MainTxt>{items[10].maintitle} </MainTxt>
                <SubTxt>{items[10].subtitle}</SubTxt>
                <p>{items[10].price}</p>
                <p>{items[10].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
            <ItemBlock>
              <img src={items[11].src} alt={items[11].maintitle} width="60%"/>
              <MainTxt>{items[11].maintitle} </MainTxt>
                <SubTxt>{items[11].subtitle}</SubTxt>
                <p>{items[11].price}</p>
                <p>{items[11].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
            <ItemBlock>
              <img src={items[12].src} alt={items[12].maintitle} width="60%"/>
              <MainTxt>{items[12].maintitle} </MainTxt>
                <SubTxt>{items[12].subtitle}</SubTxt>
                <p>{items[12].price}</p>
                <p>{items[12].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
            <ItemBlock>
              <img src={items[13].src} alt={items[13].maintitle} width="60%"/>
              <MainTxt>{items[13].maintitle} </MainTxt>
                <SubTxt>{items[13].subtitle}</SubTxt>
                <p>{items[13].price}</p>
                <p>{items[13].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
            <ItemBlock>
              <img src={items[14].src} alt={items[14].maintitle} width="60%"/>
              <MainTxt>{items[14].maintitle} </MainTxt>
                <SubTxt>{items[14].subtitle}</SubTxt>
                <p>{items[14].price}</p>
                <p>{items[14].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
            <ItemBlock>
              <img src={items[15].src} alt={items[15].maintitle} width="60%"/>
              <MainTxt>{items[15].maintitle} </MainTxt>
                <SubTxt>{items[15].subtitle}</SubTxt>
                <p>{items[15].price}</p>
                <p>{items[15].review}</p>
              <Button><Gift>Cart</Gift> <Card>buynow</Card></Button>
            </ItemBlock>
        </ProBest>
      </div>
    )
}

export  default BodyItem; 