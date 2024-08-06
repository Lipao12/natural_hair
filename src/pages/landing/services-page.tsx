import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../assets/products";
import { Service } from "../../types/types";
import { CardServices } from "../../ui/components/card-services";
import { ChooseHairDresserModal } from "../../ui/components/modal/modal-choose-hairdresser";

interface ServicesPageProps {
  setSelectedPage: (page: string) => void;
}

export const ServicesPage = ({ setSelectedPage }: ServicesPageProps) => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<Service | undefined>();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedService(undefined);
  };

  const handleServiceClick = () => {
    setSelectedPage("contact");
    navigate("/#contact");
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className=" flex flex-col p-7 space-y-10 ">
      <motion.div
        className="bg-white rounded-2xl px-6 py-4 text-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="text-[47px] ">
          Do corte ao cuidado, estamos aqui para você!
        </span>
      </motion.div>
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
                  callBack={handleServiceClick} //handleServiceClick} //openModal
                />
              );
            })}
        </div>
      </div>
      {isOpenModal && (
        <ChooseHairDresserModal
          callBack={closeModal}
          service={selectedService}
        />
      )}
    </section>
  );
};
