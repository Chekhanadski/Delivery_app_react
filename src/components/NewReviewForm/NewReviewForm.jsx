import { Rating } from "@/components/Rating/Rating";
import React, { useReducer, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "../Button/Button";

const initialState = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setName":
      return { ...initialState, name: action.payload };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return action.payload > 5
        ? state
        : { ...state, rating: Number(action.payload) || 5 };

    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={classNames(styles.root, styles.newReview)}>
      <div className={styles.header}>Leave your feedback</div>
      <div className={styles.inputs}>
        <div>        
          <input                    
            placeholder = "Your name"
            value={formValue.name}
            onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
            }
            className={styles.input}          
          />
        </div>
        <div>        
          <input           
            placeholder = "Your review"
            name="newReview"
            value={formValue.text}
            onChange={(event) =>
              dispatch({ type: "setText", payload: event.target.value })
            } 
            className={styles.input}        
          />
          <div>
            <Button>SEND</Button>
          </div>
          
        </div>
      </div>
      <div className={styles.rating}>          
        <Rating
          value={formValue.rating}
          onChange={(rating) =>
            dispatch({ type: "setRating", payload: rating })
          }
        />
      </div> 
    </div>
  );
};
