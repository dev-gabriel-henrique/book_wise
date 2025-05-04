import { NextSeo } from "next-seo";
import {
  BookButton,
  DiscoverBookContainer,
  DiscoverContainer,
  InputContainer,
  TagContainer,
} from "./styles";
import { Binoculars, MagnifyingGlass } from "phosphor-react";
import { Tag } from "@/components/Tags";
import { BookCard } from "@/components/BookCard";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchInput } from "@/components/SearchInput";
import { BookDialog } from "@/components/BookDialog";
import { useState } from "react";

const tags = [
  { label: "Tudo", value: "tudo" },
  { label: "Computação", value: "computacao" },
  { label: "Educação", value: "educacao" },
  { label: "Fantasia", value: "fantasia" },
  { label: "Ficção científica", value: "ficcaoCientifica" },
  { label: "Horror", value: "horror" },
  { label: "HQs", value: "hqs" },
  { label: "Suspense", value: "suspense" },
];

export default function Discover() {
  const router = useRouter();
  const params = useSearchParams();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const selectedGender = params?.get("gender") || "tudo";

  const handleSelectGender = (gender: string) => {
    const searchParams = new URLSearchParams(params.toString());

    if (gender === "tudo") {
      searchParams.delete("gender");
    } else {
      searchParams.set("gender", gender);
    }

    router.push(
      `${gender !== "tudo" ? "?" + searchParams.toString() : ""}`,
      undefined
    );
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <NextSeo
        title="Explorar"
        description="Descubra milhares de livros de seu interesse, leia os e nos dê sua avaliação!"
      />

      <BookDialog isOpen={isDialogOpen} onClose={handleClose} />

      <DiscoverContainer>
        <div>
          <Binoculars size={32} />
          <h1>Explorar</h1>
        </div>

        <TagContainer>
          {tags.map((tag) => (
            <li key={tag.value}>
              <Tag
                text={tag.label}
                isSelected={selectedGender === tag.value}
                onClick={() => handleSelectGender(tag.value)}
              />
            </li>
          ))}
        </TagContainer>

        <DiscoverBookContainer>
          {Array.from({ length: 10 }).map((_, i) => (
            <BookButton
              key={i}
              role="button"
              onClick={() => setIsDialogOpen(true)}
            >
              <BookCard size="md" />
            </BookButton>
          ))}
        </DiscoverBookContainer>
      </DiscoverContainer>

      <InputContainer>
        <SearchInput placeholder="Buscar livro ou autor" />
      </InputContainer>
    </>
  );
}
