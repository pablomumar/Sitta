import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import classes from './Menu.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Links from './Links/Links';

import logo from '../../../../assets/logos/Recurso 4.svg'

class Menu extends Component{
    render(){
        return (
            <Auxiliar>
                <div className={classes.main}>
                    <div className={classes.menuWrapper}>
                        <div className={classes.linkImg}>
                            <Links nombreComponent={'/collection'}><img src={logo} alt=""/></Links>
                        </div>
                        <div className={classes.linksWrapper}>
                            <Links clase={classes.menuitem} nombreComponent={'/shop'}>SHOP</Links>
                            <Links clase={classes.menuitem} nombreComponent={'/bio'}>ABOUT</Links>
                        </div>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default Menu;