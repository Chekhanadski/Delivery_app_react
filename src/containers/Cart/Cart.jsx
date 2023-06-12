import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Cart } from "@/components/Cart/Cart";
import { selectCartModule } from "@/store/ui/cart/selectors";

export const CartContainer = () => {
  const cart = useSelector(selectCartModule);
  const [isButtonActive, setIsButtonActive] = useState(false);

  if (
    !Object.keys(cart || {}).length ||
    Object.values(cart).every((amount) => amount === 0)
  ) {
    return (
      <div>
        {isButtonActive
          ? "Your order has been sent"
          : "The shopping cart is empty"}
      </div>
    );
  }

  return (
    <div>
      <Cart cart={cart} setIsButtonActive={setIsButtonActive} />
    </div>
  );
};
