import { createBrowserRouter, useRoutes } from "react-router-dom";
import Home from "@pages/Home";
import Game from "@pages/Game";
import ErrorPage from "@pages/Error";

const router = () => {
  const routes = useRoutes([
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
  return routes;
};

export default router;
