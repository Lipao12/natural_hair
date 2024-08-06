import { useState } from "react";
import { Header } from "../../header";
import { AboutSalon } from "./about-salon-paeg";
import { AboutPage } from "./about-us-page";
import { HomePage } from "./home-page";
import { ServicesPage } from "./services-page";

export const Landing = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="fade-in">
      <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
        <HomePage setSelectedPage={setSelectedPage} />
        <AboutSalon />
        <AboutPage />
        <ServicesPage setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
};
