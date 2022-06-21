import React from "react";
import styles from "./main.module.css";
import FragrancePage from "../section/fragrancepg";
import Experiences from "../section/experiences";
import MainSlide from '../section/mainslide';
import Footer from "../footer/footer";

function MainCom(){
    return(
    <div className={styles.contents}>
       <MainSlide/>
       <FragrancePage/>
       <Experiences/>
       <Footer/>
    </div>
    );
}

export default MainCom;