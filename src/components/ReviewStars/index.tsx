import { useState } from "react";
import { StarButtonEmpty, StarsButtonsContainer } from "./styles";
import { Star } from "phosphor-react";

type StarRatingProps = {
  rating: number;
  onRate?: (rate: number) => void;
};

export function ReviewStars({ rating, onRate }: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  return (
    <StarsButtonsContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => rating ? false : onRate!(star)}
          onMouseEnter={() => (rating ? false : setHoveredStar(star))}
          onMouseLeave={() => (rating ? false : setHoveredStar(0))}
          style={{ background: "none", border: "none", cursor: rating ? "default" : "pointer", boxShadow: 'none' }}
        >
          <Star
            size={16}
            weight={star <= (hoveredStar || rating) ? "fill" : "regular"}
            color="#8381D9"
          />
        </button>
      ))}
    </StarsButtonsContainer>
  );
}
