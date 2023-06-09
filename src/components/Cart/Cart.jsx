import React from "react";
import { DishContainer } from "@/containers/Dish/Dish";
import { Button } from "../Button/Button";
import styles from "./styles.module.scss";

export const Cart = ({ cart }) => {
  return (
    <div>
      <div className={styles.header}>
        Cart
      </div>
      <ul>
        {Object.entries(cart).map(([id, amount]) => {
          return (
            <>
              {amount > 0 && (
                <li key={id}>
                  <DishContainer dishId={id} />
                </li>
              )}
            </>
          );
        })}
      </ul>
      <Button className={styles.button}>ORDER</Button>
    </div>
  );
};
