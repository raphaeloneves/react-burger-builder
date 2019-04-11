import React from 'react';
import classes from './Modal.css';
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} close={props.close} />
        <div className={classes.Modal}
             style={{
                 display: props.show ? 'inline-block' : 'none'
             }}>
            {props.children}
        </div>
    </Aux>

);

export default modal;
