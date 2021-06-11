import React from 'react';

import classes from './ShowHome.css.module.css';

const showHome = (props) => (
    props.show ? <div className={classes.HomeView} onClick={props.clicked}> </div> : null
);

export default showHome;