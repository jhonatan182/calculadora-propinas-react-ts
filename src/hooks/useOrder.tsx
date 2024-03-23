import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const existsItem = order.findIndex(
      (orderState) => orderState.id === item.id
    );

    if (existsItem >= 0) {
      const updateOrder = [...order];
      updateOrder[existsItem].quantity++;

      setOrder(updateOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };

      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}
