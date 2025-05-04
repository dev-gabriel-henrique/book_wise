import {
  BookmarkSimple,
  BookOpen,
  Books,
  User,
  UserList,
} from "phosphor-react";
import { ProfileContainer, ProfileDetailsContainer, ReviewedBooks } from "./styles";
import { Avatar } from "@/components/Avatar";
import { SearchInput } from "@/components/SearchInput";
import { ReviewBox } from "@/components/ReviewBox";

export default function Profile() {
  return (
    <ProfileContainer>
      <div>
        <User size={32} />
        <h1>Profile</h1>
      </div>

      <ProfileDetailsContainer>
        <header>
          <Avatar src="https://github.com/dev-gabriel-henrique.png" size="lg" />
          <div>
            <h4>Cristofer Rosser</h4>
            <span>membro desde 2019</span>
          </div>
        </header>

        <hr className="rounded" />

        <ul>
          <li>
            <BookOpen size={32} />

            <div>
              <p>3853</p>
              <span>Páginas lidas</span>
            </div>
          </li>
          <li>
            <Books size={32} />

            <div>
              <p>10</p>
              <span>Livros avaliados</span>
            </div>
          </li>
          <li>
            <UserList size={32} />

            <div>
              <p>8</p>
              <span>Autores lidos</span>
            </div>
          </li>
          <li>
            <BookmarkSimple size={32} />

            <div>
              <p>Computação</p>
              <span>Categoria mais lida</span>
            </div>
          </li>
        </ul>
      </ProfileDetailsContainer>

      <SearchInput placeholder="Buscar livro avaliado" />

      <ReviewedBooks>
        <ReviewBox size="sm" />
      </ReviewedBooks>
    </ProfileContainer>
  );
}
