import { FaHome, FaComments, FaUserAlt } from 'react-icons/fa';

export const routesConfig = [
  {
    path: "/",
    label: "Главная",
    icon: <FaHome />  // Иконка для главной страницы
  },
  {
    path: "/chats",
    label: "Чаты",
    icon: <FaComments />  // Иконка для чатов
  },
  // {
  //   path: "/profile",
  //   label: "Профиль",
  //   icon: <FaUserAlt />  // Иконка для профиля
  // },
];
