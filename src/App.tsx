import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./footer";
import { Landing } from "./pages/landing";
import { AboutSalon } from "./pages/landing/about-salon-paeg";
import { AboutPage } from "./pages/landing/about-us-page";
import { Schedule } from "./pages/schedule/schedule";
import { SelectService } from "./pages/select-service/select-service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: "sobresalao",
        element: <AboutSalon />,
      },
      {
        path: "sobremim",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/services",
    element: <SelectService />,
  },
  {
    path: "/schedule/:hairdresserId",
    element: <Schedule />,
  },
]);

export function App() {
  return (
    <div>
      <div>
        <RouterProvider router={router} fallbackElement={<h1>Ola</h1>} />
      </div>
      <Footer />
    </div>
  );
}
