import React from "react";
import { Route, Link } from "react-router-dom";
import styles from "./experiences.module.css";
import Spa from '../../pages/spa/spa';

function Experiences() {
    return (
        <div className={styles.spa}>
            {/* <img className={styles.spa_img} src="./asset/experiences_bg.jpg" alt="" /> */}
            <h2>experiences</h2>
            <p>옛것을 소중히 여기는 영국의 전통과 아름다운 자연에서 받은 영국 정통 스파<br/>오감을 깨워 몸과 마음에 진정한 휴식을 선사합니다.</p>
            <div className={styles.btbox}>
                <div className={styles.button}>
                    <Link to="../../pages/spa/spa">
                        <p><a className={styles.button_txt}>spa treatments</a></p>
                    </Link>
                </div>
                <Route path="../../pages/spa/spa" exact component={Spa}/>
            </div>
        </div>
    );
}

export default Experiences;