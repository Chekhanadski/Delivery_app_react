import React from "react";
import { useDispatch } from "react-redux";
import { DishContainer } from "@/containers/Dish/Dish";
import { cartSlice } from "@/store/ui/cart";
import { Button } from "../Button/Button";
import styles from "./styles.module.scss";

export const Cart = ({ cart, setIsButtonActive }) => {
  const dispatch = useDispatch();
  const clearCart = () => dispatch(cartSlice.actions.clear());

  return (
    <div>
      <div className={styles.header}>Cart</div>
      <ul>
        {Object.entries(cart).map(([id, amount]) => {
          return (
            <>
              {amount > 0 && (
                <li key={id} className={styles.dishBlock}>
                  <DishContainer dishId={id} />
                </li>
              )}
            </>
          );
        })}
      </ul>
      <Button
        onClick={() => {
          setIsButtonActive(true);
          clearCart();
        }}
        className={styles.button}
      >
        ORDER
      </Button>
    </div>
  );
};
