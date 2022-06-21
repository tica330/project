import React from "react";
import { Route, Link } from "react-router-dom";
import styles from "./fragrance.module.css";
import Fragrance from "../../pages/fragrance/fragrance";


function FragrancePage() {
    return (
        <div className={styles.event}>
            {/* <img className={styles.event_img} src="./asset/event_bg.jpg" alt="" /> */}
            <h2>fragrance</h2>
            <p>따스한 봄 향기가 피어오르기 시작한 지금,<br/>새로운 계절을 맞이해 러쉬 제품과 함께하세요!</p>
            <div className={styles.btbox}>
                <div className={styles.button}>
                    <Link to="../../pages/fragrance/fragrance">
                        <p><a className={styles.button_txt}>view products</a></p>
                    </Link>
                </div>
                <Route path="../../pages/fragrance/fragrance" exact component={Fragrance}/>
            </div>
        </div>
    );
}
export default FragrancePage;