import Profile from "../../assets/profile-image.png";
import { LogoComponent } from "../../ui/components/logo";

export const HomePage = () => {
  const handleGoToAboutUs = () => {};

  return (
    <section id="home" className="flex flex-col min-h-screen">
      <LogoComponent textLeft={false} />

      <div className="flex gap-16 px-4">
        <div className="flex-1 flex flex-col">
          <span className="text-[80px] leading-normal mb-6 mt-8 font-font_primary">
            Encontre a sua melhor versão
          </span>
          <span className="secondary-text text-[30px] font-font_secondary">
            Descubra sua verdadeira beleza
          </span>
        </div>

        <div className="px-4 ">
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-right-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:z-[-1]
            before:border-[#bdbfc2]  "
          >
            <img
              onClick={handleGoToAboutUs}
              src={Profile}
              alt="Imagem mostrando a dona do salão"
              className="transform -scale-x-100 hover:filter hover:saturate-200 transition duration-500
                        hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
