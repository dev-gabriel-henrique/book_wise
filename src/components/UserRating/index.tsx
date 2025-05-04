import { Avatar } from "../Avatar";
import { ReviewStars } from "../ReviewStars";
import { UserDetails, UserRatingContainer, UserRatingHeader } from "./styles";

export function UserRating() {
  return (
    <UserRatingContainer>
      <UserRatingHeader>
        <UserDetails>
          <Avatar src="https://github.com/dev-gabriel-henrique.png" size="md" />

          <div>
            <p>Jaxson Dias</p>
            <span>Hoje</span>
          </div>
        </UserDetails>

        <div>
          <ReviewStars rating={4} />
        </div>
      </UserRatingHeader>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore
        perferendis neque repellendus dolore fugit deleniti libero accusamus
        veritatis quaerat beatae et cumque eveniet, maxime soluta officia ab
        error omnis.
      </p>
    </UserRatingContainer>
  );
}
