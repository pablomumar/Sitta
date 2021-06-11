import React, {Component} from 'react';

import classes from './Homepage.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Links from '../../../Oficial/Menus/Menu/Links/Links';
import Logo from '../../../../assets/logos/Recurso 6.svg';
import PruebaContainer from "../../../container/PruebaContainer/PruebaContainer";


class Homepage extends Component{

    render(){
        return (
            <Auxiliar>
                <Links nombreComponent={'/collection'}>
                <div className={classes.mainC}>
                        <img src={Logo} alt=""/>
                        <div>
                            <p className={classes.animTypewriter}>&nbsp;· · ·    SITTA STUDIO   · · ·</p>
                        </div>

                </div>
                </Links>
               </Auxiliar>
        )
    }
}

export default Homepage;