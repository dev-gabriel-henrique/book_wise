import { ReviewBox } from "@/components/ReviewBox";
import {
  LastReadContainer,
  MainContainer,
  PopularBooksCards,
  PopularBooksContainer,
  ReviewContainer,
} from "./styles";
import { CaretRight, ChartLineUp } from "phosphor-react";
import { BookCard } from "@/components/BookCard";

export default function Home() {
  return (
    <main>
      <MainContainer>
        <div>
          <ChartLineUp size={32} />
          <h1>Início</h1>
        </div>

        <LastReadContainer>
          <div>
            <h5>Sua última leitura</h5>
            <button>
              Ver todas <CaretRight size={16} />
            </button>
          </div>
          <ReviewBox size="sm" />
        </LastReadContainer>

        <h5>Avaliações mais recentes</h5>
        <ReviewContainer>
          <ReviewBox size="md" />
          <ReviewBox size="md" />
          <ReviewBox size="md" />
          <ReviewBox size="md" />
        </ReviewContainer>
      </MainContainer>
      <PopularBooksContainer>
        <header>
          <h5>Livros populares</h5>

          <button type="button">
            Ver todos <CaretRight size={16} />
          </button>
        </header>

        <PopularBooksCards>
          <BookCard size="sm" />
          <BookCard size="sm" />
          <BookCard size="sm" />
          <BookCard size="sm" />
        </PopularBooksCards>
      </PopularBooksContainer>
    </main>
  );
}
