import { useRoutes } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import Home from "../pages/Home/Home";
const MainRoute = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "aboutus", element: <AboutUs /> },
  ]);
  return element;
};
export default MainRoute;
