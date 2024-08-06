import { motion } from "framer-motion";
import { SalonHighlight } from "../../ui/components/salon-highlight";

export const AboutSalon = () => {
  return (
    <section
      id="about-salon"
      className="flex flex-col bg-white rounded-2xl px-6 py-4 space-y-10"
    >
      <motion.div
        initial="hidden"
        viewport={{ once: true, amount: 0.5 }}
        whileInView={"visible"}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="text-2xl font-bold mb-4 font-font_primary">
          Sobre o Natural Hair
        </h2>
        <div className="px-4 ">
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-orange-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Celebramos a beleza de todos os tipos de cabelo</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-orange-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Cuidamos de cada cliente com atenção especial</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-orange-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Proporcionamos um atendimento personalizado</span>
            </li>
          </ul>
        </div>
      </motion.div>

      <div className="space-y-10">
        <SalonHighlight
          imageUrl="https://placehold.co/580x350?text=Foto+1+do+salão"
          altText="Salon image 1"
          text="Transformando a beleza natural de cada cabelo."
          imagePosition="left"
        />
        <SalonHighlight
          imageUrl="https://placehold.co/580x350?text=Foto+2+do+salão"
          altText="Salon image 1"
          text="Cuidando de todos os tipos de cabelo com amor e dedicação."
          imagePosition="right"
        />
        <SalonHighlight
          imageUrl="https://placehold.co/580x350?text=Foto+3+do+salão"
          altText="Salon image 3"
          text="Oferecemos um ambiente acolhedor e moderno para realçar sua beleza."
          imagePosition="left"
        />
      </div>
    </section>
  );
};
