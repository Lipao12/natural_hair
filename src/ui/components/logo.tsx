import Logo from "../../assets/logo.png";
interface LogoComponentProps {
  textLeft: boolean;
}
export const LogoComponent = ({ textLeft = false }: LogoComponentProps) => {
  return (
    <div
      className={`flex ${
        textLeft ? "flex-row space-x-2" : "flex-col space-y-2"
      } items-center justify-center w-[180px]`}
    >
      <img
        className={`h-[80px] w-[180px]`}
        src={Logo}
        alt="Logo do salão Natural Hair"
      />
      <h2 className="text-2xl text-center">Natural Hair</h2>
    </div>
  );
};
