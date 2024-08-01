import { X } from "lucide-react";
import { hairdressers } from "../../../assets/hairdressers";
import { CardChooseHairDresser } from "../card-chosse-hairdresser";

interface ChooseHairDresserModalProps {
  callBack: () => {};
}

export const ChooseHairDresserModal = ({
  callBack,
}: ChooseHairDresserModalProps) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 z-10">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Escolha a profissional
              </h2>
              <button type="button" onClick={callBack}>
                {""}
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {hairdressers.map((hairdresser) => {
                return (
                  <CardChooseHairDresser
                    key={hairdresser.id}
                    imageURL={hairdresser.image}
                    name={hairdresser.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
