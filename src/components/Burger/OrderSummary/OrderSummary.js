import React, { Fragment } from "react";

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span> :{" "}
        {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Please Verify</p>
      <ul>{ingredients}</ul>
      <p>Total Price: ${props.totalPrice}</p>
      <p><strong>Continue to Checkout?</strong></p>
      <button onClick={props.continuePurchase}>Yes</button>
      <button onClick={props.cancelPurchase}>No</button>
    </Fragment>
  );
};

export default orderSummary;
