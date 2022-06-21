import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import styles from './App.module.css';
import Main from './components/main/main';
import Best from './pages/best/best';
import New from './pages/new/new';
import Body from './pages/body/body';
import Face from './pages/face/face';
import Hair from './pages/hair/hair';
import Fragrance from './pages/fragrance/fragrance';
import Gift from './pages/gift/gift';
import LoginCoupon from './pages/coupon/logincoupon';
import Spa from './pages/spa/spa';
import Logo from './asset/images/logo.jpg';

//yarn add react-icons
//yarn add styled-components
//yarn add react-router-dom@5

function App() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.h_top}>
          <Link to='/'><img className={styles.logo} src={Logo} alt='logo'/></Link>
        </div>
        <div className={styles.h_nav}>
          <ul>
            <li className={styles.on}><Link to='/'>HOME</Link></li>
            <li className='sel'><Link to='/pages/new/new'>NEW</Link></li>
            <li><Link to='/pages/best/best'>BEST</Link></li>
            <li><Link to='/pages/body/body'>BODY</Link></li>
            <li><Link to='/pages/face/face'>FACE</Link></li>
            <li><Link to='/pages/hair/hair'>HAIR</Link></li>
            <li><Link to='/pages/fragrance/fragrance'>FRAGRANCE</Link></li>
            <li><Link to='/pages/gift/gift'>GIFT</Link></li>
            <li><Link to='/pages/spa/spa'>SPA</Link></li>
            <li><Link to='/pages/coupon/logincoupon'>login</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/pages/new/new" component={New}/>
        <Route path="/pages/best/best" component={Best}/>
        <Route path="/pages/body/body" component={Body}/>
        <Route path="/pages/face/face" component={Face}/>
        <Route path="/pages/hair/hair" component={Hair}/>
        <Route path="/pages/fragrance/fragrance" component={Fragrance}/>
        <Route path="/pages/gift/gift" component={Gift}/>
        <Route path="/pages/spa/spa"component={Spa}/>
        <Route path="/pages/coupon/logincoupon" component={LoginCoupon}/>
      </div>
    </div>
  );
}

export default App;
