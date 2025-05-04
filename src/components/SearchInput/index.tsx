import { MagnifyingGlass } from "phosphor-react";
import { SearchInputContainer, SearchInputRoot } from "./styles";

interface SearchInputProps {
  placeholder?: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <SearchInputContainer>
      <SearchInputRoot type="text" placeholder={placeholder} />

      <button type="button">
        <MagnifyingGlass size={20} />
      </button>
    </SearchInputContainer>
  );
}
