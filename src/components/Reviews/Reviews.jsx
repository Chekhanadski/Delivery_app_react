import { ReviewContainer } from "@/containers/Review/Review";
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import React from "react";
import { useState } from "react";

import styles from "./styles.module.scss";

export const Reviews = ({ reviews }) => {
  const [isFormReady, setIsFormReady] = useState(false);
  if (!reviews?.length) {
    return null;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <div className={styles.reviews}>
        {reviews.map((reviewId) => (
          <ReviewContainer
            key={reviewId}
            reviewId={reviewId}
            className={styles.review}
          />
        ))}
      </div>
      {isFormReady === true ? (
        <div className={styles.text}>Your review has been sent</div>
      ) : (
        <NewReviewForm setIsFormReady={setIsFormReady} />
      )}
    </div>
  );
};
