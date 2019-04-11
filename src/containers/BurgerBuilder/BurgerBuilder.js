import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BurgerControls/BuildControls";

const INGREDIENT_PRICE = {
    salad : 0.5,
    cheese: 0.8,
    meat: 1.8,
    bacon: 1
};

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ++ingredients[type];
        const price = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({totalPrice : price, ingredients : ingredients});
    };

    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = --ingredients[type];
        const price = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({totalPrice : price, ingredients : ingredients});
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                />
            </Aux>
        );
    };
}
export default BurgerBuilder;
