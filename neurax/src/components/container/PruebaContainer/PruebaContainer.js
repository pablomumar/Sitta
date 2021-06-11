import React, { Component } from 'react';
import './PruebaContainer.css';
import Auxiliar from '../../hoc/Auxiliar/Auxilar';
import PruebaAnimacion1 from '../../pruebas/PruebaAnimacion1/PruebaAnimacion1';
import PruebaAnimacion2 from '../../pruebas/PruebaAnimacion2/PruebaAnimacion2';
import PruebaAnimacion3 from '../../pruebas/PruebaAnimacion3/PruebaAnimacion3';
import PruebaAnimacion4 from '../../pruebas/PruebaAnimacion4/PruebaAnimacion4';
import PruebaHeader from '../../pruebas/PruebaHeader/PruebaHeader';
import PruebaAnimacionScroll from '../../pruebas/PruebaAnimacionScroll/PruebaAnimacionScroll'

class PruebaContainer extends Component {
    render() {
        return (
            <Auxiliar>
                <PruebaHeader/>
                <div className="marco">
                    <PruebaAnimacion1/>
                    <PruebaAnimacion2/>
                    <PruebaAnimacion3/>
                    <PruebaAnimacion4/>
                    <PruebaAnimacionScroll/>
                </div>
            </Auxiliar>
        );
    }
}

export default PruebaContainer;