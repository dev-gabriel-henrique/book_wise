import Image from "next/image";
import { BookCardContainer, BookDetails } from "./styles";
import { ReviewStars } from "../ReviewStars";

import Hobbit from "@/assets/o-hobbit.png";

interface BookCardProps {
  size: "sm" | "md";
}

export function BookCard({ size }: BookCardProps) {
  return (
    <BookCardContainer sizes={size}>
      {size === "md" && <span id="read">Lido</span>}
      <Image
        src={Hobbit}
        width={size === "md" ? 108 : 64}
        height={size === "md" ? 152 : 94}
        alt="O hobbit"
      />

      <BookDetails>
        <div>
          <h3>A revolução dos bichos</h3>
          <span>J.R.R Tolkien</span>
        </div>

        <ReviewStars rating={4} />
      </BookDetails>
    </BookCardContainer>
  );
}
