import { useState } from "react";
import { services } from "../../assets/products";
import { CardServicesRow } from "../../ui/components/card-row";
import { ChooseHairDresserModal } from "../../ui/components/modal/modal-choose-hairdresser";

export const SelectService = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="flex flex-col max-w-6xl px-6 py-10 mx-auto space-y-8 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Esses são os nossos serviços para você. Escolha qual é o que melhor te
          satisfaz!
        </h1>
        <p className="text-gray-600  ">
          Oferecemos uma variedade de serviços para atender todas as suas
          necessidades. Desde cortes de cabelo até análises capilares, estamos
          aqui para garantir que você receba o melhor atendimento possível.
        </p>
      </div>
      <div className="">
        {services.map((service) => {
          return (
            <CardServicesRow
              key={service.name}
              name={service.name}
              description={service.description}
              imageUrl="https://placehold.co/150x150?text=Foto+do+serviço"
              time={service.time}
              price={service.price}
              callBack={openModal}
            />
          );
        })}
      </div>

      {isOpenModal && <ChooseHairDresserModal callBack={closeModal} />}
    </div>
  );
};
