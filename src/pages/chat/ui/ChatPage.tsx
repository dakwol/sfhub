import React from "react";
import "./styles.scss";
import { PageContainer } from "@widgets";

const ChatPage: React.FC = () => {
  return (
    <PageContainer 
      contentRight={
        <div>ChatPage</div>
      } 
      contentLeft={
        <div>ChatPage</div>
      }      
    />
   
  );
};

export default ChatPage;