import Image from "next/image";
import { DialogClose, Root } from "@radix-ui/react-dialog";
import { Bookmark, BookmarkSimple, BookOpen, X } from "phosphor-react";

import { ReviewStars } from "../ReviewStars";
import {
  BookCategory,
  BookCategoryAndPages,
  BookDetails,
  BookDetailsContainer,
  BookDialogContainer,
  BookDialogOverlay,
  BookPages,
  BookRatingsCloseButton,
  BookRatingsContainer,
} from "./styles";

import book from "@/assets/domain-driven-design.png";
import { ReviewBox } from "../ReviewBox";
import { UserRating } from "../UserRating";

interface BookDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookDialog({ isOpen, onClose }: BookDialogProps) {
  return (
    <Root open={isOpen} modal={true} onOpenChange={onClose}>
      <BookDialogOverlay />
      <BookDialogContainer>
        <BookDetailsContainer>
          <BookDetails>
            <Image src={book} width={172} height={242} alt="book" />

            <div>
              <div>
                <h3>Domain Driven Design</h3>
                <span>Zeno Rocha</span>
              </div>

              <ReviewStars rating={4} />
            </div>
          </BookDetails>

          <hr />

          <BookCategoryAndPages>
            <BookCategory>
              <BookmarkSimple size={24} />

              <div>
                <span>Categoria</span>
                <p>Computação, educação </p>
              </div>
            </BookCategory>

            <BookPages>
              <BookOpen size={24} />
              <div>
                <span>Páginas</span>
                <p>160</p>
              </div>
            </BookPages>
          </BookCategoryAndPages>
        </BookDetailsContainer>

        <BookRatingsContainer>
          <div>
            <span>Avaliações</span>

            <button>Avaliar</button>
          </div>

          <UserRating />
          <UserRating />
          <UserRating />
          <UserRating />
        </BookRatingsContainer>

        <DialogClose asChild>
          <BookRatingsCloseButton onClick={onClose}>
            <X size={24} />
          </BookRatingsCloseButton>
        </DialogClose>
      </BookDialogContainer>
    </Root>
  );
}
