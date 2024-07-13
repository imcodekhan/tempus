import Capsule from "./Capsule";
import { createBrowserRouter } from "react-router-dom";
import Landing from "./Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/capsule/:id",
    element: <Capsule />,
  },
]);

export default router;
