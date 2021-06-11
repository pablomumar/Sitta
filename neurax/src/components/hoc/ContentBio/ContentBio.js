import React from 'react';
import './ContentBio.module.css';
import Auxiliar from '../../hoc/Auxiliar/Auxilar';
import classes from "../../Oficial/Pages/Bio/Bio.module.css";

const contentBio = (props) => {

        return (
            props.image ?
                (
            <Auxiliar>
                <div className={classes.containerHeader}>
                    <div className={classes.blackTitle}>
                        <p>{props.title}</p>
                    </div>
                    <div className={classes.divImg}>
                        <img src={props.imageSRC} alt=""/>
                    </div>
                    <p onClick={props.clickStyle}><i className={classes.arrow} onClick={props.clicked}> </i></p>
                </div>
                <div className={classes.containerText}>
                    <p>{props.contentText}</p>
                </div>
            </Auxiliar>
                ) :
                (
                    <Auxiliar>
                        <div className={classes.containerHeader}>
                            <div className={classes.blackTitle}>
                                <p>{props.title}</p>
                            </div>
                            <div className={classes.divImg}>
                                <p>{props.contentText}</p>
                            </div>
                            <p onClick={props.clickStyle}><i className={classes.arrow} onClick={props.clicked}> </i></p>
                        </div>
                    </Auxiliar>
                )
        );
}

export default contentBio;