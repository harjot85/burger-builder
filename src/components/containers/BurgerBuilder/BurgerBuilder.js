import React, { Component, Fragment } from "react";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";

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
    isPurchasing: false,
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

  purchaseHandler = () => {
    this.setState({ isPurchasing: true });
  };

  render() {
    const { ingredients, totalPrice } = this.state;
    const disabled = { ...this.state.ingredients };
    for (let key in disabled) {
      disabled[key] = disabled[key] < 1;
    }

    return (
      <Fragment>
        {
          <Modal show={this.state.isPurchasing}>
            <OrderSummary ingredients={ingredients} />
          </Modal>
        }
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={totalPrice}
          disabled={disabled}
          ordered={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
