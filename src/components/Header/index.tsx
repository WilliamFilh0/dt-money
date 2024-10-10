import { HeaderContainer, HeaderContent, NewTransctionButton } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt=""></img>

          <NewTransctionButton>Nova transação</NewTransctionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
}
