import { ArrowRight } from "lucide-react";

interface CardServicesProps {
  name: string;
  description: string;
}

export const CardServices = ({ name, description }: CardServicesProps) => {
  return (
    <div className="p-6">
      <div className="bg-[#ededed] shadow-md rounded-lg p-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Service Image"
          className="rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 text-justify">{description}</p>
        <button className="mt-4 bg-[#242933] text-white px-4 py-2 rounded-md flex items-center gap-2">
          <span>Agendar</span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
