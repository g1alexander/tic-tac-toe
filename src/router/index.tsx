import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Game from "@pages/Game";
import ErrorPage from "@pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/game",
    element: <Game />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
