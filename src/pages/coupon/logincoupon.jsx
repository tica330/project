import React from "react";
import CouponItem from "./couponitem";
import styled from 'styled-components';
import Login from './login';
import Footer from "../../components/footer/footer.jsx";

const Coupons = styled.div`
  width:100%;
  background-color:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InBox = styled.div`
  margin:0 auto;
  // margin-bottom:30px;
  width:80%; 
  height:auto;
  text-align:center;
 `
 const InBox2 = styled.div`
  margin:0 auto;
  margin-bottom:100px;
  width:80%; 
  height:auto;
  text-align:center;
 `
function LoginCoupon(){
  const coupons = [
    {
      id: 1,
      name: 'sale coupon!',
      sell: '5,000won',
      comment: '20,000만원 이상 결제시'
    },
    {
      id: 2,
      name: 'birthdayh coupon!',
      sell: '10%',
      comment: '20,000만원 이상 결제시'
    },
    {
      id: 3,
      name: 'vip coupon!',
      sell: '7,000won',
      comment: '20,000만원 이상 결제시'
    },
    {
      id: 4,
      name: '4th event coupon!',
      sell: '20%',
      comment: '20,000만원 이상 결제시'
    }
  ];
return(
<div>
  <Coupons>
    <Login/>
    <InBox>
          <CouponItem coupon={coupons[0]} />
          <CouponItem coupon={coupons[1]} />
    </InBox>
    <InBox2>
          <CouponItem coupon={coupons[2]} />
          <CouponItem coupon={coupons[3]} />
    </InBox2>
    <Footer/>
  </Coupons>
</div>
);
}

export default LoginCoupon;