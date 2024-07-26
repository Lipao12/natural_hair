import { CardServices } from "../ui/components/card-services";

export const ServicesPage = () => {
  return (
    <div className="bg-white rounded-2xl flex flex-col p-7 space-y-10 ">
      <span className="text-[47px]">
        Do corte ao cuidado, estamos aqui para você
      </span>
      <span className="text-[34px]">Nossos serviços</span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 pl-0">
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
      </div>
    </div>
  );
};
