import React from 'react';
import './BlackBg.css';

const BlackBg = (props) => (
    props.show ? <div className="BackDrop" onClick={props.clicked}></div> : null
)

export default BlackBg;