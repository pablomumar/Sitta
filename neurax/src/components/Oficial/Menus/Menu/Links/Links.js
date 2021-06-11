import React from 'react';
import {Link} from 'react-router-dom';

const links = (props) => {
    return(
        <div className={props.clase}>
            <Link to={props.nombreComponent}>{props.children}</Link>
        </div>
    )
};

export default links;