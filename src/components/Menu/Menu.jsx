import React from "react";
import { DishContainer } from "@/containers/Dish/Dish";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectCartModule } from "@/store/ui/cart/selectors";

import styles from "./styles.module.scss";

export const Menu = ({ menu }) => {
  const cart = useSelector(selectCartModule);
  const cartArray = Object.values(cart);
  const amount =
    cartArray.length && cartArray.reduce((acc, item) => (acc += item));

  return (
    <div className={styles.root}>
      <h2>MENU</h2>
      <ul className={styles.dishList}>
        {menu.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId} className={styles.dish} />
        ))}
      </ul>

      <Link href="/cart" className={styles.link}>
        <Image src="/images/blackCart.png" width={30} height={30} alt="Cart" />
        {amount !== 0 && (
          <div className={styles.amount}>
            <span>{amount}</span>
          </div>
        )}
      </Link>
    </div>
  );
};
