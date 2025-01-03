import { createEvent, createStore } from "effector";

// События
export const addMessage = createEvent<string>();

// Состояние
export const $chatMessages = createStore<string[]>([])
  .on(addMessage, (state, message) => [...state, message]);
