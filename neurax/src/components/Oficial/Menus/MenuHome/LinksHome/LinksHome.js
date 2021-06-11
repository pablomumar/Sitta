import React from 'react';

import classes from './LinksHome.module.css';
import Auxiliar from '../../../../hoc/Auxiliar/Auxilar';

const LinksHome = (props) => {
    let style = classes.posicionLink;
    style = {
        position: 'absolute',
        top: props.topPerc + '%',
        left: props.leftPerc + '%',
        transform: 'translate(' + props.transTop + '%, ' + props.transLeft + '%)'
    };

    return (
        <Auxiliar>
            <div className={['col-md-6', classes.posicionLink].join(' ')}>
                <Link to={props.nombreComponent} style={style}>
                    {props.children}
                </Link>
            </div>
        </Auxiliar>
    )
};

export default LinksHome;