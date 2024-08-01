import { ArrowRight } from "lucide-react";

interface CardServicesRowProps {
  name: string;
  description: string;
  imageUrl: string;
  time: number;
  price: number;
  callBack: () => void;
}

export const CardServicesRow = ({
  name,
  description,
  imageUrl,
  time,
  price,
  callBack,
}: CardServicesRowProps) => {
  const handleCallBack = () => {
    callBack();
  };
  return (
    <div className="p-6">
      <div className="bg-[#ededed] shadow-md rounded-lg p-4 flex flex-row items-start relative">
        <img
          src={imageUrl}
          alt="Service Image"
          className="rounded-md w-1/5 h-32 object-cover"
        />
        <div className="flex flex-col p-4 text-left w-3/4">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 text-justify">{description}</p>
          <div className="flex flex-row gap-2 items-center text-gray-700">
            <span>
              <strong>Duração:</strong> {time} min
            </span>
            <span>
              <strong>Preço:</strong> R${price}
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <button
            type="button"
            className="bg-[#242933] text-white px-4 py-2 rounded-md flex items-center gap-2"
            onClick={handleCallBack}
          >
            <span>Agendar</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
