import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./footer";
import { Landing } from "./pages/landing";
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
]);

export function App() {
  return (
    <div>
      <div className="m-1 mb-0">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </div>
  );
}
