import React, { Component, Fragment } from "react";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
      ingredients: {
          cheese: 0, 
          salad: 0, 
          meat: 0, 
          bacon: 0
      }
  };
  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Fragment>
    );
  }
}

export default BurgerBuilder;