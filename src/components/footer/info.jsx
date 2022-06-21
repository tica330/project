import React from "react";
import styles from './info.module.css';
import LogoW from '../../asset/images/logo_w.png';
import { Link } from 'react-router-dom';
import Facebook from '../../asset/images/icon_facebook.gif';
import Instagram from '../../asset/images/icon_insta.gif';
import Youtube from '../../asset/images/icon_youtube.gif';
import Pfkakao from '../../asset/images/icon_p.gif';
import Blog from '../../asset/images/icon_naver.gif';

function Info() {
    return(
        <div className={styles.Info}>
            <ul className={styles.infoul}>
                <li className={styles.info_left}>
                    <ul className={styles.info_contect}>
                        <li><img src={LogoW} alt="logo"/></li>
                        <li>고객센터 1644-2357</li>
                        <li>webmaster@lush.co.kr</li>
                        <li>상담전화 13:00 ~ 16:00 (평일)</li>
                        <li>상담톡 10:00 ~ 16:00 (평일)</li>
                    </ul>
                    <ul className={styles.info_icon}>
                        <li><a href="https://www.facebook.com/lushkorea" target='_blank'><img src={Facebook} alt="" width="80%"/></a></li>
                        <li><a href="https://www.instagram.com/lushkorea/" target='_blank'><img src={Instagram} alt="" width="80%"/></a></li>
                        <li><a href="https://www.youtube.com/user/LUSHKOREA1" target='_blank'><img src={Youtube} alt="" width="80%"/></a></li>
                        <li><a href="https://pf.kakao.com/_VEbUM" target='_blank'><img src={Pfkakao} alt="" width="80%"/></a></li>
                        <li><a href="https://m.post.naver.com/lushkr1" target='_blank'><img src={Blog} alt="" width="80%"/></a></li>
                    </ul>
                </li>
                <li className={styles.info_right}>
                    <ul className={styles.info_mn}>
                        <li><Link to="">매장안내</Link></li>
                        <li><Link to="">러쉬소개</Link></li>
                        <li><Link to="">개인정보처리방침</Link></li>
                        <li><Link to="">영상정보관리지침</Link></li>
                        <li><Link to="">이용약관</Link></li>
                        <li><Link to="">고객센터</Link></li>
                    </ul>
                    <ul className={styles.info_email}>
                        <li><input type="text" name="newsEmail" id="mail" placeholder="이메일 주소를 입력해 주세요." maxlength="30"/></li>
                        <li><a href="#"><input type="button" className={styles.newsbtn} value="구독하기"/></a></li>
                    </ul>
                    <ul className={styles.info_add}>
                        <li>서울특별시 서초구 서운로 138 (서초동아타워) 6층 | 사이트 운영자 : 주식회사 러쉬코리아 | 대표이사 : 우미령</li>
                        <li>사업자 등록번호 : 201-81-77964 사업자정보확인 | 통신판매업 신고번호 : 2012-서울서초-0647 | 개인정보보호책임자 : 신상훈</li>
                        <li>COPYRIGHTⓒLUSHKOREA CO.LTD.ALL RIGHTS RESERVED.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
export default Info;