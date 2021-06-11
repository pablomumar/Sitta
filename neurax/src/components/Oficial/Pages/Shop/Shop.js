import React, {Component} from 'react';

import classes from './Shop.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Menu from '../../Menus/Menu/Menu';
//import PruebaAnimacionAutoScroll from '../../../pruebas/PruebaAnimacionAutoScroll/PruebaAnimacionAutoScroll'

class Shop extends Component{
    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div className={classes.mainCont}>
                    <h1>Shop</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis dolores eaque, et facilis hic laboriosam maxime molestiae non quas quis ratione repellat rerum sunt tenetur totam veniam voluptate voluptates?</p>
                </div>
            </Auxiliar>
        )
    }
}

export default Shop;