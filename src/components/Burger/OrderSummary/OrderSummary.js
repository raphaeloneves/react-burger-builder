import React from 'react';
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    let ingredients = Object.keys(props.ingredients).map((k, index) => {
        return <li key={k + index}><span style={{textTransform: 'capitalize'}}>{k}</span>: {props.ingredients[k]}</li>
    });

    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>You're close to order a delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Proceed to checkout?</p>
            <div style={{textAlign: 'center'}}>
                <Button btnType={'Danger'} clicked={props.cancel}>Cancel</Button>
                <Button btnType={'Success'} clicked={props.continue}>Continue</Button>
            </div>
        </Aux>
    );
};

export default orderSummary;
