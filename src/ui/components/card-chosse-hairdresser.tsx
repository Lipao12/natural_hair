import { ArrowRight } from "lucide-react";

interface CardChooseHairDresserProps {
  imageURL: string;
  name: string;
}

export const CardChooseHairDresser = ({
  imageURL,
  name,
}: CardChooseHairDresserProps) => {
  return (
    <div
      className="bg-[#242933] rounded-xl mx-4 px-4 py-2 flex flex-row text-white text-left items-center cursor-pointer shadow-lg 
                        transition-transform transform hover:scale-[101%] hover:shadow-xl group"
    >
      <img
        src={imageURL}
        className="max-h-20 max-w-20 rounded-full border-2 border-white"
      />
      <span className="ml-4 text-xl font-semibold truncate">{name}</span>
      <ArrowRight className="ml-auto transition-transform transform group-hover:translate-x-2" />
    </div>
  );
};
