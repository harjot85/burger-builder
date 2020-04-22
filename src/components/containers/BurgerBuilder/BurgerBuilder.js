import React, { Component, Fragment } from "react";
import Burger from "../../Burger/Burger";

class BurgerBuilder extends Component {
  state = {
      ingredients: {
          cheese: 1, 
          salad: 2, 
          meat: 2, 
          bacon: 1
      }
  };
  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
