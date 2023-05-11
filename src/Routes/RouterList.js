import { URL_HOME_PAGE } from "Helpers/Path";
import { HomePage } from "Components/Pages/HomePage";

const RoutesList = [
  {
    path: URL_HOME_PAGE,
    exact: true,
    Component: <HomePage />,
  },
];

export default RoutesList;
