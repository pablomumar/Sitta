import React, {Component} from 'react';

import classes from './Bio.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Menu from '../../Menus/Menu/Menu';
import ContentBio from '../../../hoc/ContentBio/ContentBio';

import img1 from '../../../../assets/images/SilviettaSeriousBussinesCut2.jpg';
import imgPlaceH2 from '../../../../assets/images/ph2.jpg';
import PruebaAnimacionAutoScroll from '../../../pruebas/PruebaAnimacionAutoScroll/PruebaAnimacionAutoScroll'


class Bio extends Component{
    state = {
        image: [true, false, true],
        title : [null, "Titulo 2", "kdfdfjhgkjd"],
        img : [img1, null, null],
        content : [
"Adoro il lavoro di investigazione che si nasconde dietro a ogni collezione. Amo lasciarmi guidare dal processo artistico, giocare con le forme e gli strati e scoprire ogni volta come creare manipolazioni tessili e dare dimensione allabbigliamento. Materia e natura si connettono, sono rinvigorite dal colore e dalla spontaneità si trasformano in abiti che raccontano una storia e in collezioni che incoraggiano lindividualità nel vestirsi.",
            "Esto es otro texto por poner cosas como coche, carro, auto, automocion, auto emocion que son emociones automaticas como se automatizan las automatizaciones de automoviles autoconscientes en out spaces como van comiendo espacio las letras.",
            "Pues otro texto tal y cual de los cuales yo cojo y tal con los hommies in da street"
        ],
        count: 0,
        transition: false,
        classesAnim: [classes.textContainer, classes.transicion]
    }

    changeStateTrans = () => (
        this.setState(prevState => {
            return {transition: prevState.transition = true}
        })
    );

    changeScene = () => (
        this.state.count === this.state.image.length-1 ?
            (

                this.setState(prevState => {
                    return {count: prevState.count = 0}
                })
            ): (
                this.setState(prevState => {
                    return {count: prevState.count + 1}
                })
            )
    );

    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div className={classes.allContainer}>
                    <div
                        className={this.state.transition ? this.state.classesAnim.join(' ') : classes.textContainer }
                        onAnimationEnd={() => this.setState(prevState => {return {transition: prevState.transition = false}})}
                    >
                        <ContentBio
                            image={this.state.image[this.state.count]}
                            imageSRC={this.state.img[this.state.count]}
                            title={this.state.title[this.state.count]}
                            contentText={this.state.content[this.state.count]}
                            clicked={this.changeScene}
                            clickStyle={this.changeStateTrans}
                        />
                    </div>
                    <div className={classes.scrollContainer}>
                        <PruebaAnimacionAutoScroll/>
                    </div>
                </div>

            </Auxiliar>
        )
    }
}

export default Bio;