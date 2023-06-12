import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import Image from "next/image";

import { selectCartModule } from "@/store/ui/cart/selectors";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Header = ({ className }) => {
  const cart = useSelector(selectCartModule);
  const cartArray = Object.values(cart);
  const amount =
    cartArray.length && cartArray.reduce((acc, item) => (acc += item));

  return (
    <header className={classNames(styles.root, className)}>
      <Link href="/" className={styles.link}>
        <Image src="/images/whiteLogo.png" width={115} height={47} alt="" />
      </Link>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/restaurants" className={styles.link}>
          Restaurants
        </Link>
        <Link href="/cart" className={styles.link}>
          <Image
            src="/images/whiteCart.png"
            width={30}
            height={30}
            alt="Cart"
            className={styles.image}
          />
          {amount !== 0 && (
            <div className={styles.amount}>
              <span>{amount}</span>
            </div>
          )}
        </Link>
      </div>
    </header>
  );
};
