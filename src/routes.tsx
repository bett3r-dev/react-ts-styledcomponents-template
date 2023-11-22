import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home/Home";
import ScreenExample from "./screens/ScreenExample/ScreenExample";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    //   loader: rootLoader,
      // children: [
      //   {
      //     path: "hola",
      //     element: <Page1 />,
      //   //   loader: teamLoader,
      //   },
      // ],
    },
    {
      path: "/screen-example",
      element: <ScreenExample/>,
    }
  ]);

export default router;