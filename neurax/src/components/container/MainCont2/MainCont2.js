import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Auxiliar from '../../hoc/Auxiliar/Auxilar';
import classes from './MainCont2.css';
import HomePage from '../../../components/Oficial/Pages/Homepage/Homepage';
import Shop from '../../../components/Oficial/Pages/Shop/Shop';
import Bio from '../../../components/Oficial/Pages/Bio/Bio';
import Collection from '../../../components/Oficial/Pages/Collection/Colection';
import Error from '../../../components/Oficial/Error/Error';


class MainCont2 extends Component {

    render() {
        return (
            <Auxiliar>
                <Route path='/' exact render={() => (
                    <Auxiliar>
                            <HomePage/>
                    </Auxiliar>
                )}/>
                <Route path='/shop' exact component={Shop}/>
                <Route path='/bio' exact component={Bio}/>
                <Route path='/collection' exact component={Collection}/>
                <Route path='/none' exact component={Error}/>
            </Auxiliar>
        );
    }
}

export default MainCont2;