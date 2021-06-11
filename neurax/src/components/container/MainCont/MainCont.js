import React, { Component } from 'react';

import Auxiliar from '../../hoc/Auxiliar/Auxilar';
// import classes from './MainCont.module.css';
import MenuHome from '../../../components/Oficial/Menus/MenuHome/MenuHome';
import Bio from '../../../components/Oficial/Pages/Bio/Bio';
import Redes from '../../../components/Oficial/Pages/Redes/Redes';
import Error from '../../../components/Oficial/Error/Error';

class MainCont extends Component {
    render() {
        return (
            <Auxiliar>
                    <Auxiliar>
                        <MenuHome/>
                    </Auxiliar>
                </Auxiliar>
        );
    }
}

export default MainCont;