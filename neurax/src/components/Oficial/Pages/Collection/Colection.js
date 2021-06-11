import React, {Component} from 'react';

import classes from './Collection.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Menu from '../../Menus/Menu/Menu';

import imgPlaceH1 from '../../../../assets/images/ph1.jpg';
import imgPlaceH2 from '../../../../assets/images/ph2.jpg';
import imgPlaceH3 from '../../../../assets/images/ph3.jpg';
import imgPlaceH4 from '../../../../assets/images/ph4.jpg';
import videoSitta from '../../../../assets/videos/sitta_video_logo_music.mp4';

import PruebaAnimacionScroll from '../../../pruebas/PruebaAnimacionScroll/PruebaAnimacionScroll';
import PruebaAnimacionAutoScroll from '../../../pruebas/PruebaAnimacionAutoScroll/PruebaAnimacionAutoScroll';


class Collection extends Component{
    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div className={classes.allContainer}>
                    <div className={classes.textContainer}>

                        <div className={classes.containerImg}>
                            <video autoPlay controls muted loop>
                                <source src={videoSitta} type="video/mp4"/>
                                    Your browser does not support the video tag.
                            </video>
                        </div>
                        {/*
                        <div className={classes.containerImg}>
                            <img src={imgPlaceH4} alt=""/>
                            {/*<p><i className={classes.arrow}> </i></p>}
                        </div>*/}

                        {/*
                        <div className={classes.containerImg}>
                            <img src={imgPlaceH1} alt=""/>
                            <p><i className={classes.arrow}> </i></p>
                        </div>
                        */}
                    </div>



                    {/* ############ Parte Scroll*/}
                    <div className={classes.scrollContainer}>
                        <PruebaAnimacionAutoScroll/>
                    </div>
                </div>

            </Auxiliar>
        )
    }
}

export default Collection;