interface SalonHighlightProps {
  imageUrl: string;
  altText: string;
  text: string;
  imagePosition?: "left" | "right"; // Adiciona a prop para posição da imagem
}

export const SalonHighlight = ({
  imageUrl,
  altText,
  text,
  imagePosition = "left",
}: SalonHighlightProps) => {
  const imageFirst = imagePosition === "left" ? "flex-row" : "flex-row-reverse";

  return (
    <div className={`flex ${imageFirst} w-full`}>
      <img
        src={imageUrl}
        alt={altText}
        className={`rounded-md ${imagePosition === "left" ? "ml-4" : "mr-4"}`}
      />
      <div className="mt-4 mb-4 h-auto w-full px-4 py-2 bg-secundary text-white">
        <span className="font-font_secondary text-[20px]">{text}</span>
      </div>
    </div>
  );
};