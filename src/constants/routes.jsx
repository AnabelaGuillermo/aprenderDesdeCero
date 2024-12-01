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
import SyllablesView from "../views/SyllablesView";
import VegetablesView from "../views/VegetablesView";
import FruitView from "../views/FruitView";
import ShapesView from "../views/ShapesView";
import AnimalsView from "../views/AnimalsView";
import BodyView from "../views/BodyView";
import EmotionsView from "../views/EmotionsView";
import FoodView from "../views/FoodView";

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
        path: "Partes del cuerpo",
        element: <BodyView />,
      },
      {
        path: "Sílabas",
        element: <SyllablesView />,
      },
      {
        path: "Verduras",
        element: <VegetablesView />,
      },
      {
        path: "Frutas",
        element: <FruitView />,
      },
      {
        path: "Formas",
        element: <ShapesView />,
      },
      {
        path: "Animales",
        element: <AnimalsView />,
      },
      {
        path: "Emociones",
        element: <EmotionsView />,
      },
      {
        path: "Comidas y bebidas",
        element: <FoodView />,
      },
      {
        path: "*",
        element: <Error404View />,
      },
    ],
  },
]);
