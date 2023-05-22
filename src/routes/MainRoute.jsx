import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
const MainRoute = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return element;
};
export default MainRoute;
