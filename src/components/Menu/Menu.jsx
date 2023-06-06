import { Dish } from "@/components/Dish/Dish";
import React from "react";

import styles from "./styles.module.scss";
import { DishContainer } from "@/containers/Dish/Dish";
import Link from "next/link";
import Image from "next/image";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.root}>
      <h3>MENU</h3>
      <ul className={styles.dishList}>
        {menu.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId} className={styles.dish} />
        ))}
      </ul>
      <Link href="/cart" className={styles.link}>
        <Image src="/images/blackCart.png" width={30} height={30} alt="Cart" />
      </Link>
    </div>
  );
};
