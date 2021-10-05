import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton orders={orders} increaseOrder={setOrders} />
    </li>
  );
};
export default Order;
