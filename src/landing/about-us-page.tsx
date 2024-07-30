import Brush from "../assets/brush.png";
import Profile from "../assets/profile-image.png";
import { about_me_text } from "../assets/text";

export const AboutPage = () => {
  return (
    <>
      <div
        className="gap-16 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${Brush})` }}
      >
        <span className="text-[34px] font-font_primary">Sobre mim</span>
        <div className="flex">
          <div className="flex-1 p-4">
            <span className="font-font_secondary leading-8 text-justify">
              {about_me_text}
            </span>
          </div>
          <div>
            <img src={Profile} />
          </div>
        </div>
      </div>
    </>
  );
};
