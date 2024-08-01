import Logo from "../../assets/logo.png";
export const LogoComponent = () => {
  return (
    <div className="space-y-2 items-center justify-center w-[180px]">
      <img className="h-[80px] " src={Logo} alt="Logo do salão Natural Hair" />
      <h2 className="text-2xl text-center">Natural Hair</h2>
    </div>
  );
};
