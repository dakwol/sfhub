import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig.tsx";

const HomePage = React.lazy(() => import("@pages/home").then((module) => ({ default: module.HomePage })));
const ChatPage = React.lazy(() => import("@pages/chat").then((module) => ({ default: module.ChatPage })));

export const router = createBrowserRouter(
  routesConfig.map(({ path }) => ({
    path,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {path === "/" && <HomePage />}
        {path === "/chats" && <ChatPage />}
      </Suspense>
    ),
  }))
);
