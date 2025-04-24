import { Avatar } from "../Avatar";
import {
  BookBio,
  BookDetailsContainer,
  BookDetailsInfo,
  ReviewContainer,
  ReviewHeader,
  TextContent,
  UserDetails,
} from "./styles";
import Image from "next/image";

import Hobbit from "@/assets/o-hobbit.png";
import { useState } from "react";
import { ReviewStars } from "../ReviewStars";

interface ReviewBoxProps {
  size: "sm" | "md";
}

export function ReviewBox({ size }: ReviewBoxProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const fullText = `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Voluptatibus dolorum natus aliquam quaerat a atque doloremque
    consectetur nam deserunt praesentium consequuntur qui aperiam neque
    asperiores veritatis odio porro, blanditiis illum.
  `;
  const maxLength = 220;

  const displayText = isExpanded
    ? fullText
    : fullText.slice(0, maxLength) + (fullText.length > maxLength ? "..." : "");

  return (
    <ReviewContainer sizes={size}>
      {size === "md" && (
        <ReviewHeader>
          <UserDetails>
            <Avatar src="https://github.com/dev-gabriel-henrique.png" />

            <div>
              <p>Jaxson Dias</p>
              <span>Hoje</span>
            </div>
          </UserDetails>

          <div>
            <ReviewStars rating={4} />
          </div>
        </ReviewHeader>
      )}

      <BookDetailsContainer>
        <Image src={Hobbit} width={108} height={152} alt="Livro do hobbit" />

        <BookDetailsInfo>
          {size === "sm" && (
            <ReviewHeader>
              <span>Hoje</span>

              <ReviewStars rating={4} />
            </ReviewHeader>
          )}

          <BookBio>
            <p>O Hobbit</p>
            <span>J.R.R Tolkien</span>
          </BookBio>

          <TextContent isExpanded={isExpanded}>
            <p>
              {displayText}

              <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "ver menos" : "ver mais"}
              </button>
            </p>
          </TextContent>
        </BookDetailsInfo>
      </BookDetailsContainer>
    </ReviewContainer>
  );
}
