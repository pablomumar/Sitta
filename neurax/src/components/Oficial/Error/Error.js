import React, {Component} from 'react';

import classes from './Error.module.css';
import Auxiliar from '../../hoc/Auxiliar/Auxilar';
import Menu from '../Menus/Menu/Menu';

class Error extends Component{
    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div className={[classes.contConstruct].join(' ')}>
                    <div>
                        <p>Página en construcción! Disculpa las molestias ;)</p>
                        <p>Más pronto que tarde</p>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default Error;