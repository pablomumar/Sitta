import React, {Component} from 'react';
import {Link} from 'react-router';

import classes from './MenuHome.module.css';
import LinksHome from './LinksHome/LinksHome';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';

import logo from '../../../../assets/logos/Recurso 6.png'
import MainCont from "../../../container/MainCont/MainCont";

class MenuHome extends Component{
    render(){
        return (
            <Auxiliar>
                <div className={classes.mainCont}>
                    <div className={[classes.contFixedItem, classes.left].join(' ')}>
                        <a href="#">Bio</a>
                    </div>
                    <div className={[classes.contFixedItem, classes.right].join(' ')}>
                        <a href="#">Shop</a>
                    </div>
                </div>
                <div className={classes.contFixedLogo}>
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                </div>
                {/*<LinksHome topPerc={40} leftPerc={60} transTop={-50} transLeft={-50} nombreComponent='/bio'>Bio</LinksHome>*/}
                {/*<LinksHome topPerc={60} leftPerc={60} transTop={-50} transLeft={-50} nombreComponent='/none'>Tienda</LinksHome>*/}
            </Auxiliar>
        )
    }
}

export default MenuHome;