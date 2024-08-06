import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { InputInfo } from "../input-info";

interface ConfirmModalProps {
  callBack: () => void;
  informations: any;
}

export const ConfirmModal = ({ callBack, informations }: ConfirmModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [animateModal, setAnimateModal] = useState(false);

  useEffect(() => {
    setAnimateModal(true);
  }, []);

  const handleClose = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setShowModal(false);
      callBack();
    }, 200);
  };

  const capitalize = (str: string) => {
    if (typeof str !== "string") {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  };

  const formatedDataTime = `${capitalize(
    format(informations.dateTime.date, "eeee", {
      locale: ptBR,
    })
  )} - ${format(informations.dateTime.date, "dd/MM/yyyy")} às ${
    informations.dateTime.time
  }`;

  const isPhoneNumberFormat = (str: string) =>
    /^\(\d{2}\) \d \d{4}-\d{4}$/.test(str);
  const handleConfirm = () => {
    if (phoneNumber === "" || !isPhoneNumberFormat(phoneNumber)) {
      console.log("Número de telefone inválido");
      return;
    }
    console.log("Agendamento confirmado");
    // Jogar para o banco de dados e enviar um toast
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
                Confirmação do serviço e do horário
              </h2>
              <button type="button" onClick={handleClose}>
                {""}
                <X className="size-5 text-zinc-400" />
              </button>
            </div>

            <InputInfo
              label="Serviço escolhido"
              content={informations.service?.name}
            />
            <InputInfo
              label="Profissional"
              content={informations.hairdresser?.name}
            />
            <InputInfo label="Horário" content={formatedDataTime} />
            <InputInfo
              label="Número de celular"
              content={phoneNumber}
              disable={false}
              onChange={setPhoneNumber}
            />

            <button
              type="button"
              onClick={handleConfirm}
              className="bg-lime-300 text-lime-950 hover:bg-lime-400 py-2 w-full h-11 px-5 font-medium flex items-center gap-2 justify-center rounded-lg"
            >
              Agendar Horário
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
