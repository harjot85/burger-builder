import React, { Fragment } from "react";

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{textTransform: 'capitalize'}}>{ingKey}</span> : {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Please Verify</p>
      <ul>{ingredients}</ul>
    </Fragment>
  );
};

export default orderSummary;
