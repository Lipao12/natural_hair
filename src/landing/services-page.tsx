import { services } from "../../public/products";
import { CardServices } from "../ui/components/card-services";

export const ServicesPage = () => {
  console.log(services);
  return (
    <div className=" flex flex-col p-7 space-y-10 ">
      <div className="bg-white rounded-2xl px-6 py-4 text-center">
        <span className="text-[47px] ">
          Do corte ao cuidado, estamos aqui para você!
        </span>
      </div>
      <div className="bg-white rounded-2xl px-6 py-4">
        <span className="text-[34px]">Nossos serviços</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 pt-0 pl-0">
          {services.map((service: any) => {
            return (
              <CardServices
                key={service.name}
                name={service.name}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
