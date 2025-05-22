import ukIcon from "../assets/img/uk-icon.png";
import { ColoredTitle } from "./ColoredTitle";

export const Footer = () => {
  return (
    <footer className="absolute bottom-5 px-16 w-full">
      <section className="relative text-white text-4xl flex items-center justify-between gap-x-4 bg-[#5D87A2] rounded-full px-20 py-4">
        <ColoredTitle
          title="Próximas Carreras"
          color="#001F6D"
          className="-top-3 left-28 text-xl"
        />
        <div className="flex items-center">
          <div className="flex items-center bg-[#0F3762] overflow-hidden bullet-shape-footer-time ps-3 pe-8 py-2 h-fit">
            <p className="text-2xl">01:09 PM</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p>C-105 Suderland</p>
            <img width={60} src={ukIcon} alt="" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-[#0F3762] overflow-hidden bullet-shape-footer-time ps-3 pe-8 py-2 h-fit">
            <p className="text-2xl">01:14 PM</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p>C-106 Suderland</p>
            <img width={60} src={ukIcon} alt="" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-[#0F3762] overflow-hidden bullet-shape-footer-time ps-3 pe-8 py-2 h-fit">
            <p className="text-2xl">01:19 PM</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p>C-107 Suderland</p>
            <img width={60} src={ukIcon} alt="" />
          </div>
        </div>
      </section>
    </footer>
  );
};
