import { HeaderContainer, HeaderContent, NewTransctionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTrasactionModal";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt=""></img>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransctionButton>Nova transação</NewTransctionButton>
            </Dialog.Trigger>

            <NewTransactionModal></NewTransactionModal>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
}
