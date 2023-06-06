import React, { useContext } from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";
import Link from "next/link";

export const Header = ({ className }) => {
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
          <Image src="/images/whiteCart.png" width={30} height={30} alt="Cart" />
        </Link>
      </div>
    </header>
  );
};
