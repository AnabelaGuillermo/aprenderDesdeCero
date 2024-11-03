import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import HomeView from "../views/HomeView";
import AlphabetView from "../views/AlphabetView";
import WriteAndListenView from "../views/WriteAndListenView";
import ReadView from "../views/ReadView";
import Error404View from "../views/Error404View";
import NumbersView from "../views/NumbersView";
import ColorsView from "../views/ColorsView";
import HomeStuffView from "../views/HomeStuffView";

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
        path: "Números",
        element: <NumbersView />,
      },
      {
        path: "Colores",
        element: <ColorsView />,
      },
      {
        path: "Cosas de la casa",
        element: <HomeStuffView />,
      },
      {
        path: "*",
        element: <Error404View />,
      },
    ],
  },
]);
