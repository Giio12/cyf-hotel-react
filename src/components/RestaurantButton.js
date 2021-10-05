import React from "react";

const RestaurantButton = props => {
  const { orders, increaseOrder } = props;
  return (
    <button
      className="btn btn-primary"
      id="btnAdd"
      onClick={() => {
        increaseOrder(orders + 1);
      }}
    >
      Add
    </button>
  );
};
export default RestaurantButton;
