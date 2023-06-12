import { RestaurantReviewsContainer } from "@/containers/RestaurantReviews/RestaurantReviews";
import { useRouter } from "next/router";

export default function CurrentRestaurantsPage() {
  const { query } = useRouter();

  return <div>
    <RestaurantReviewsContainer restaurantId={query.restaurantId} />
    </div>  
}
