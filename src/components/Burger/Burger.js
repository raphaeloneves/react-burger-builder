import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = (props) => {

    let burgerIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, index) => {
                return <BurgerIngredient key={key + index} type={key} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(burgerIngredients.length === 0) {
        burgerIngredients = <p>Please, add your ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='top-bread' />
            {burgerIngredients}
            <BurgerIngredient type='bottom-bread' />
        </div>
    );
};

export default burger;
