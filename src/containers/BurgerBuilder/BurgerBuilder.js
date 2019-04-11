import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BurgerControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        totalPrice: 4,
        purchasable : false,
        purchasing: false
    };

    updatePurchaseStatus = (ingredients) => {
        const sum = Object.keys(ingredients).map(k => {
            return ingredients[k];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0});
    };

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ++ingredients[type];
        const price = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({totalPrice : price, ingredients : ingredients});
        this.updatePurchaseStatus(ingredients);
    };

    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = --ingredients[type];
        const price = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({totalPrice : price, ingredients : ingredients});
        this.updatePurchaseStatus(ingredients);
    };

    startPurchasing = () => {
        this.setState({purchasing: true});
    };

    cancelPurchasing = () => {
        this.setState({purchasing: false});
    };

    continuePurchasing = () => {
        alert("Continue purchasing");
    };

    render() {

        let disableIngredients = {...this.state.ingredients};
        Object.keys(disableIngredients).forEach(k => {
            disableIngredients[k] = disableIngredients[k] < 1;
        });

        return (
            <Aux>
                <Modal show={this.state.purchasing} close={this.cancelPurchasing}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancel={this.cancelPurchasing}
                        continue={this.continuePurchasing}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disableIngredients={disableIngredients}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.startPurchasing}
                />
            </Aux>
        );
    };
}
export default BurgerBuilder;
