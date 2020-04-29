import React, { Component, Fragment } from "react";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 1.75,
  cheese: 1.5,
  meat: 1.25,
  bacon: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      meat: 0,
      bacon: 0,
    },
    totalPrice: 5,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount === 0 ? oldCount : oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice =
      this.state.totalPrice === 0
        ? this.state.totalPrice
        : this.state.totalPrice - priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  render() {
      const disabled = { ...this.state.ingredients}
      for (let key in disabled) {
          disabled[key] = disabled[key] < 1
      }
      
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          disabled={disabled}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
