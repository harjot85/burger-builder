import React from "react";

import classes from "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  let requestedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredients key={ingredientKey + i} type={ingredientKey} />
        );
      });
    })
    .reduce((previous, current) => {
      return previous.concat(current);
    }, []);

  if (requestedIngredients.length === 0) {
    requestedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {requestedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
