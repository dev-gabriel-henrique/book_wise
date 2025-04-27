import { useSearchParams } from "next/navigation";
import { TagButton } from "./styles";
import { useRouter } from "next/router";

interface TagProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export function Tag({ text, onClick, isSelected }: TagProps) {
  return (
    <TagButton selected={isSelected} onClick={onClick}>
      {text}
    </TagButton>
  );
}
