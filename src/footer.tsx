import { Hexagon, MapPin, Phone } from "lucide-react";
import { Divider } from "./ui/components/divider";

export const Footer = () => {
  const address = "Av. Augusto Calmon 1067, Linhares, ES, 29900-065";
  const handleOpenWhatsapp = () => {
    const phoneNumber = "27992458842";
    const message = "Olá, gostaria de agendar um horário. Como posso proceder?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const handleOpenMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-secundary">
      <div className="flex max-w-6xl px-6 py-10 mx-auto space-y-8 text-white">
        <div className="flex-1 flex flex-col">
          <p className="font-font_secondary text-[20px] mb-5">AGENDAMENTO</p>
          <span className="text-[34px] font-font_primary">
            Entre em contato e descubra como podemos ajudar você.
          </span>

          <Divider w="w-80" color="bg-white" margin="mt-10 mb-8" />

          <div
            className="flex flex-row mb-4 gap-4 cursor-pointer max-w-80 text-[18px]"
            onClick={handleOpenWhatsapp}
          >
            <Hexagon />
            <span>Agende pelo WhatsApp</span>
          </div>
          <div className="flex flex-row gap-4 max-w-80 text-[18px]">
            <Phone />
            <span>(27) 9 9245-8842</span>
          </div>

          <div
            className="flex flex-col max-w-72 pl-5 pt-3 pb-3 border space-y-2 mt-20 main-text bg-terciary shadow-slate-300
                            rounded-es-[20px] rounded-se-[20px] cursor-pointer"
            onClick={handleOpenMaps}
          >
            <div className="flex flex-row gap-4">
              <MapPin />
              <span className="text-[20px]">Onde estamos</span>
            </div>
            <span className="font-font_primary text-[#45474d]">{address}</span>
            <div className="cursor-pointer mr-auto p-1 pl-0">
              <span className="underline">Abrir Mapa</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[401px] border justify-center items-center text-center p-14 rounded-es-[20px] rounded-se-[20px]">
          <h1 className="font-font_primary text-[34px]">
            HORARIO DE FUNCIONAMENTO
          </h1>
          <Divider w="w-[255px]" color="bg-white" margin="mt-3 mb-9" />
          <span className="font-font_secondary text-[20px] mb-4">
            TERÇA A SÁBADO
          </span>
          <span className="font-font_secondary text-[20px]">8h00 - 20h00</span>
          <Divider w="w-[255px]" color="bg-white" margin="mt-9 mb-3" />
          <span className="font-font_secondary text-[20px]">
            Para que possamos te dedicar mais atenção, trabalhamos com
            atendimento agendado.
          </span>
        </div>
      </div>
    </div>
  );
};
