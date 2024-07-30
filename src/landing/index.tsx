import { AboutPage } from "./about-us-page";
import { HomePage } from "./home-page";
import { ServicesPage } from "./services-page";

export const Landing = () => {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <HomePage />
      <ServicesPage />
      <AboutPage />
    </div>
  );
};
