import Link from "next/link";
import React from "react";
import { Button } from "../Button/Button";

import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  const { name, description } = restaurant || {};

  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <span>{description}</span>
      <div className={styles.navigationBar}>
        <Link
          href={`/restaurants/${restaurant.id}/menu`}
          className={styles.link}
        >  
        <Button>
           MENU
        </Button> 
        </Link>
        <Link
          href={`/restaurants/${restaurant.id}/reviews`}
          className={styles.link}
        >
        <Button>
          REVIEWS
        </Button>          
        </Link>
      </div>
    </div>
  );
};
