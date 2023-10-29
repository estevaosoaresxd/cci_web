import { createBrowserRouter } from "react-router-dom";

// PAGES
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Logs from "../../pages/logs/Logs";
import Home from "../../pages/home/Home";
import Chatbot from "../../pages/chatbot/Chatbot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/logs",
    element: <Logs />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/chatbot",
    element: <Chatbot />,
  },
]);
