import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../assets/products";
import { CardServices } from "../../ui/components/card-services";
import { ChooseHairDresserModal } from "../../ui/components/modal/modal-choose-hairdresser";

export const ServicesPage = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <section id="services" className=" flex flex-col p-7 space-y-10 ">
      <div className="bg-white rounded-2xl px-6 py-4 text-center">
        <span className="text-[47px] ">
          Do corte ao cuidado, estamos aqui para você!
        </span>
      </div>
      <div className="bg-white rounded-2xl px-6 py-4">
        <div className="flex flex-row justify-between items-baseline ">
          <span className="text-[34px]">Nossos serviços mais utilizados</span>
          <span
            className="text-[20px] underline cursor-pointer"
            onClick={() => {
              navigate("/services");
            }}
          >
            Todos os serviços
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 pt-0 pl-0">
          {services
            .sort((a: any, b: any) => b.qnt - a.qnt)
            .slice(0, 3)
            .map((service: any) => {
              return (
                <CardServices
                  key={service.id}
                  name={service.name}
                  description={service.description}
                  imageUrl="https://placehold.co/150x150?text=Foto+do+serviço"
                  callBack={openModal}
                />
              );
            })}
        </div>
      </div>
      {isOpenModal && <ChooseHairDresserModal callBack={closeModal} />}
    </section>
  );
};
