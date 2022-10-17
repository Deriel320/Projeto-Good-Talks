import React from "react";
import * as C from "./styles";
import {BsFillChatTextFill} from "react-icons/bs"
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";





const SidebarHeader = ({ setUserChat }) => {


    const [user] = useAuthState(auth);
    const refChat = db
      .collection("chats")
      .where("users", "array-contains", user.email);
    const [chatsSnapshot] = useCollection(refChat);
  
    const handleCreateChat = () => {
      const emailInput = prompt("Digite o Email do Destinatário");
  
      if (!emailInput) return;
  
      if (!EmailValidator.validate(emailInput)) {
        return alert("E-mail inválido!");
      } else if (emailInput === user.email) {
        return alert("Insira um e-mail diferente do seu!");
      } else if (chatExists(emailInput)) {
        return alert("Chat já existe!");
      }
  
      db.collection("chats").add({
        users: [user.email, emailInput],
      });
    };
  
    const chatExists = (emailChat) => {
      return !!chatsSnapshot?.docs.find(
        (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
      );
    };
  
    return (
      <C.Container>
        <C.Avatar
          src={user?.photoURL}
          onClick={() => [auth.signOut(), setUserChat(null)]}
        />
        <C.Options>
          <BsFillChatTextFill onClick={handleCreateChat} />
        </C.Options>
      </C.Container>
    );
  };
  
  export default SidebarHeader;