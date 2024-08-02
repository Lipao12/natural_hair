import AnchorLink from "react-anchor-link-smooth-scroll";

interface LinkProps {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

interface HeaderProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  let page_to_go = "";
  if (page === "Página inicial" || page === "Natural Hair") {
    page_to_go = "home";
  } else if (page === "Sobre o salão") {
    page_to_go = "about-salon";
  } else if (page === "Sobre mim") {
    page_to_go = "about-me";
  } else if (page === "Serviços") {
    page_to_go = "services";
  } else if (page === "Contato") {
    page_to_go = "contact";
  }
  return (
    <AnchorLink
      className={`${
        selectedPage === page_to_go ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${page_to_go}`}
      onClick={() => setSelectedPage(page_to_go)}
    >
      {page}
    </AnchorLink>
  );
};

export const Header = ({ selectedPage, setSelectedPage }: HeaderProps) => {
  return (
    <nav className="bg-secundary text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold cursor-pointer">
          <Link
            page="Natural Hair"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <div className="flex space-x-4">
          <div
            className="cursor-pointer hover:text-gray-300 transition-colors duration-300"
            onClick={() => {}}
          >
            <Link
              page="Página Inicial"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
            <Link
              page="Serviços"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
            <Link
              page="Sobre o salão"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
            <Link
              page="Sobre mim"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
            <Link
              page="Contato"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
