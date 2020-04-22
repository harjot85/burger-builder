import React from "react";

import classes from "./Burger.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  const requestedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
        return [...Array(props.ingredients[ingredientKey])]
    .map((_, i) => {
        return <BurgerIngredients key={ingredientKey + i} type={ingredientKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
        {requestedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
