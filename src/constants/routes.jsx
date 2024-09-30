import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import HomeView from "../views/HomeView"
import AlphabetView from "../views/AlphabetView";
import WriteAndListenView from "../views/WriteAndListenView"
import ReadView from "../views/ReadView";
import Error404View from "../views/Error404View";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "Abecedario",
        element: <AlphabetView />,
      },
      {
        path: "Escribe y escucha",
        element: <WriteAndListenView />,
      },
      {
        path: "Lectura en voz alta",
        element: <ReadView />,
      },
      {
        path: "*",
        element: <Error404View />,
      },
    ],
  },
]);
