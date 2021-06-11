import React, { Component } from 'react';
import './PruebaAnimacionAutoScroll.css';
import Auxiliar from '../../hoc/Auxiliar/Auxilar';
import TextoScroll from '../../../assets/logos/ScrollSitta.png';

class PruebaAnimacionAutoScroll extends Component {

    animationScroll = () => {

            console.log('estoy looping?');
            const newBP1 = this.state.backPos - 2;
            this.scrollImg = {
                background: 'url(' + TextoScroll + ') 0% ' + newBP1 + '% / 45px repeat-y',
                backgroundSize: 45 + 'px auto',
                transition: .8 + 's',
                width: 45 + 'px'
            };
            this.setState({backPos: newBP1});

    };

    render() {
        return (
            <Auxiliar>
                <div className="animacionScroll">
                    <div className={"marginScrolls"}> </div>
                </div>
            </Auxiliar>
        );
    }
}

export default PruebaAnimacionAutoScroll;