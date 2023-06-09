import { Cart } from "@/components/Cart/Cart";
import { selectCartModule } from "@/store/ui/cart/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const CartContainer = () => {
  const cart = useSelector(selectCartModule);
  if (
    !Object.keys(cart || {}).length ||
    Object.entries(cart).every(([id, amount]) => amount === 0)
  ) {
    return <div>The shopping cart is empty</div>;
  }

  return (
    <div>
      <Cart cart={cart} />      
    </div>
  )
    
};
