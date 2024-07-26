import Logo from "../assets/logo.png";
import Profile from "../assets/profile-image.png";

export const HomePage = () => {
  const handleGoToAboutUs = () => {};

  return (
    <div className="flex flex-col">
      <div className="space-y-2 items-center justify-center w-[180px]">
        <img
          className="h-[80px] "
          src={Logo}
          alt="Logo do salão Natural Hair"
        />
        <h2 className="text-2xl text-center">Natural Hair</h2>
      </div>
      <div className="flex gap-16 px-4">
        <div className="flex-1 flex flex-col">
          <span className="text-[100px] leading-tight mb-4 mt-4">
            Encontre a sua melhor versão
          </span>
          <span className="secondary-text text-[34px]">
            Descubra sua verdadeira beleza
          </span>
        </div>

        <div className="px-4 hover:cursor-pointer" onClick={handleGoToAboutUs}>
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-right-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:z-[-1]
            before:border-[#bdbfc2]  "
          >
            <img
              src={Profile}
              alt="Imagem mostrando a dona do salão"
              className="transform -scale-x-100 hover:filter hover:saturate-200 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
