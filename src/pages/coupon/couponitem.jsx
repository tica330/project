import React from "react";
import styled from 'styled-components';
import './coupon.css';

const CouponBlock = styled.div`
  // float:left;
  margin:15px;
  display:inline-block;
  width:370px;
  height:220px;
  background-color:#000; 
  color:#fff;
  border-radius:20px;
  box-sizing:border-box;
  font-family: handwritten;
  text-align:center;
  `

function CouponItem({ coupon }){
  return (
    <CouponBlock>
      <div className="coupon_box">
        <b>{coupon.name}</b>
        <h3>{coupon.sell}</h3>
        <p>({coupon.comment})</p>
        <button>DownLoad</button>
      </div>
    </CouponBlock>
  );
}

export default CouponItem;