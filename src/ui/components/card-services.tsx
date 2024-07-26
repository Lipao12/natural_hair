import { ArrowRight } from "lucide-react";
import ServiceImg from "../../assets/corte-cabelo.png";

export const CardServices = () => {
  return (
    <div className="max-w-[299px]">
      <img src={ServiceImg} />
      <div className="bg-[#ededed] p-4 pr-6 rounded-b-2xl">
        <span className="text-[25px]">Corte de Cabelo</span>
        <p className="mt-2 text-justify">
          Cortes modernos e clássicos para todos os estilos. Transforme seu
          visual com um corte personalizado.
        </p>
        <button
          type="button"
          className="rounded-md bg-[#242933] text-white w-43 h-11 text-left flex items-center gap-3 px-5 mt-4"
        >
          <span>Agendar</span>
          {""}
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
