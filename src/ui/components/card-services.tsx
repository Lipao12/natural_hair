import { ArrowRight } from "lucide-react";

interface CardServicesProps {
  name: string;
  description: string;
  imageUrl: string;
  callBack: () => void;
}

export const CardServices = ({
  name,
  description,
  imageUrl,
  callBack,
}: CardServicesProps) => {
  return (
    <div className="p-6">
      <div className="bg-[#ededed] shadow-md rounded-lg p-4">
        <img
          src={imageUrl}
          alt={`Imagem do serviço ${name}`}
          className="rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 text-justify">{description}</p>
        <button
          onClick={callBack}
          className="mt-4 bg-[#242933] text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <span>Agendar</span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
