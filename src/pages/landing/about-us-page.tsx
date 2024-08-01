import Brush from "../../assets/brush.png";

export const AboutPage = () => {
  return (
    <section
      id="about-me"
      className="gap-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${Brush})` }}
    >
      <span className="text-[34px] font-bold mb-4 font-font_primary">
        Sobre mim
      </span>
      <div className="flex">
        <div className="flex-1 p-4">
          <div className="font-font_secondary text-black leading-8 text-justify text-[18px] space-y-4">
            <p>
              Olá! Sou [Seu Nome], uma cabeleireira apaixonada pela arte de
              transformar cabelos e elevar a autoestima.
            </p>

            <ul className="list-disc list-inside space-y-2 pl-4 ">
              <li>
                <strong className="font-font_primary">
                  Experiência Profissional:
                </strong>{" "}
                Com [X] anos de experiência, me especializo em cortes,
                colorações, penteados e tratamentos capilares.
              </li>
              <li>
                <strong className="font-font_primary">
                  Dedicação ao Cliente:
                </strong>{" "}
                Cada cliente é único para mim, e eu me dedico a entender suas
                necessidades e desejos.
              </li>
              <li>
                <strong className="font-font_primary">
                  Atualização e Tendências:
                </strong>{" "}
                Além de me manter atualizada com as últimas tendências, adoro
                compartilhar dicas para que seus cabelos fiquem sempre saudáveis
                e bonitos.
              </li>
              <li>
                <strong className="font-font_primary">Convite:</strong> Agende
                uma consulta e venha descobrir o look dos seus sonhos!
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src="https://placehold.co/446x574?text=Foto+dela" />
        </div>
      </div>
    </section>
  );
};
