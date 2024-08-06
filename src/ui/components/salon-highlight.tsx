import { motion } from "framer-motion";

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
    <motion.div
      className={`flex ${imageFirst} w-full`}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: imagePosition === "left" ? 50 : -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <img
        src={imageUrl}
        alt={altText}
        className={`rounded-md ${imagePosition === "left" ? "ml-4" : "mr-4"}`}
      />
      <div className="mt-4 mb-4 h-auto w-full px-4 py-2 bg-secundary text-white">
        <span className="font-font_secondary text-[20px]">{text}</span>
      </div>
    </motion.div>
  );
};
