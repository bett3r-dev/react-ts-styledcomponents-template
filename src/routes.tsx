import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home/Home";
import { Page1 } from "./screens/Page1/Page1";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    //   loader: rootLoader,
      children: [
        {
          path: "hola",
          element: <Page1 />,
        //   loader: teamLoader,
        },
      ],
    },
  ]);

export default router;