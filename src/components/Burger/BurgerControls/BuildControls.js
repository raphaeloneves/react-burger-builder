import React from 'react';
import classes from './BuildControls.css'
import BuildControl from "../BurgerControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>

        {controls.map((ctrl, index) =>
            <BuildControl
                key={ctrl + index}
                label={ctrl.label}
                type={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disableIngredients[ctrl.type]}
            />
        )}

        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={() => props.purchasing()}>ORDER NOW</button>
    </div>
);

export default buildControls;
