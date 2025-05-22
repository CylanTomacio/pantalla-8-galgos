import ukIcon from "../assets/img/uk-icon.png";
import { ColoredTitle } from "./ColoredTitle";

export const Footer = () => {
  return (
    <footer className="absolute bottom-5 px-16 w-full">
      <section className="relative text-white text-3xl flex items-center justify-between gap-x-4 bg-[#5D87A2] rounded-full px-20 py-4">
        <ColoredTitle
          title="Resultados última carrera"
          color="#001F6D"
          className="-top-3 left-28 text-xl"
        />
        <div className="flex items-center bg-[#0F3762] overflow-hidden bullet-shape-footer-time ps-3 pe-8 py-2">
          <p className="text-2xl">01:03 PM</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p>C-103 Suderland</p>
          <img width={72} src={ukIcon} alt="" />
        </div>
        <div className="flex items-center gap-x-2 font-bold">
          <p className="uppercase font-normal">Ganador</p>
          <p className="bg-black rounded px-3 py-0.5 text-3xl">4</p>
          <p className="font-bold">34.75</p>
        </div>
        <div className="flex items-center gap-x-2 font-bold">
          <p className="uppercase font-normal">Exacta</p>
          <p className="bg-black rounded px-3 py-0.5 text-3xl">4</p>
          <p className="bg-[#E06920] rounded px-3 py-0.5 text-3xl text-black">
            5
          </p>
          <p className="font-bold">45.60</p>
        </div>
        <div className="flex items-center gap-x-2 font-bold">
          <p className="uppercase font-normal">Trifecta</p>
          <p className="bg-black rounded px-3 py-0.5 text-3xl">4</p>
          <p className="bg-[#E06920] rounded px-3 py-0.5 text-3xl text-black">
            5
          </p>
          <p className="bg-[#FF1800] rounded px-3 py-0.5 text-3xl">1</p>
          <p>87.52</p>
        </div>
      </section>
    </footer>
  );
};
