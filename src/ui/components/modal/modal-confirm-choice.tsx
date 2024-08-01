import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

interface ConfirmModalProps {
  callBack: () => void;
  informations: any;
}

export const ConfirmModal = ({ callBack, informations }: ConfirmModalProps) => {
  const capitalize = (str: string) => {
    if (typeof str !== "string") {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  };
  return (
    <div>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 z-10">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Confirmação do serviço e do horário
              </h2>
              <button type="button" onClick={callBack}>
                {""}
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <div className="bg-zinc-800 rounded-xl px-4 py-2 space-y-1 mx-4">
              <p className="text-zinc-500 text-[14px]">Serviço escolhido</p>
              <p className="ml-2 text-zinc-400 text-[20px]">Corte de Cabelo</p>
            </div>
            <div className="bg-zinc-800 rounded-xl px-4 py-2 space-y-1 mx-4">
              <p className="text-zinc-500 text-[14px]">Profissional</p>
              <p className="ml-2 text-zinc-400 text-[20px]">
                {informations.hairdresser}
              </p>
            </div>
            <div className="bg-zinc-800 rounded-xl px-4 py-2 space-y-1 mx-4">
              <p className="text-zinc-500 text-[14px]">Horário</p>
              <p className="ml-2 text-zinc-400 text-[20px]">
                {capitalize(
                  format(informations.dateTime.date, "eeee", {
                    locale: ptBR,
                  })
                )}{" "}
                - {format(informations.dateTime.date, "dd/MM/yyyy")} às{" "}
                {informations.dateTime.time}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {}}
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
