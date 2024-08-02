import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hairdressers } from "../../../assets/hairdressers";
import { CardChooseHairDresser } from "../card-chosse-hairdresser";

interface ChooseHairDresserModalProps {
  service:
    | {
        id: string;
        name: string;
        description: string;
        time: number;
        price: number;
        qnt: number;
      }
    | undefined;
  callBack: () => void;
}

export const ChooseHairDresserModal = ({
  service,
  callBack,
}: ChooseHairDresserModalProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNavigation = (hairdresser_id: string) => {
    navigate(`/schedule/${hairdresser_id}`);
  };

  useEffect(() => {
    setAnimateModal(true);
  }, []);

  const handleClose = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setShowModal(false);
      callBack();
    }, 300);
  };

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          showModal ? "modal-enter-active" : "modal-exit-active"
        }`}
      >
        <div
          className={`w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 z-10 transition-transform duration-300 ${
            animateModal ? "modal-enter-active" : "modal-exit-active"
          }`}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Escolha a profissional
              </h2>
              <button type="button" onClick={handleClose}>
                {""}
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <div className="bg-zinc-800 rounded-xl px-4 py-2 space-y-1 mx-4">
              <p className="text-zinc-500">Serviço escolhido</p>
              <p className="ml-2 text-zinc-400 text-[20px]">{service?.name}</p>
              <p className="ml-2 text-zinc-400">{service?.description}</p>
            </div>
            <div className="flex flex-col space-y-8">
              {hairdressers.map((hairdresser) => {
                return (
                  <div
                    key={hairdresser.id}
                    onClick={() => {
                      handleNavigation(hairdresser.id);
                    }}
                  >
                    <CardChooseHairDresser
                      key={hairdresser.id}
                      imageURL={hairdresser.image}
                      name={hairdresser.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
