import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = (props) => {

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='top-bread' />
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='bacon' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bottom-bread' />
        </div>
    );
};

export default burger;
