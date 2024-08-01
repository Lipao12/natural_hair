import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./footer";
import { Landing } from "./pages/landing";
import { Schedule } from "./pages/schedule";
import { SelectService } from "./pages/select-service/select-service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "services",
    element: <SelectService />,
  },
  {
    path: "schedule",
    element: <Schedule />,
  },
]);

export function App() {
  return (
    <div>
      <div>
        <RouterProvider router={router} />
        <Footer />
      </div>
    </div>
  );
}
