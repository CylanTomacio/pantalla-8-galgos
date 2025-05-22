import { useEffect } from "react";
import { ColoredTitle, GalgosNumbers } from "../shared";

type Props = {
  setShowPreambulo: (showPreambulo: boolean) => void;
};

export const Results = ({ setShowPreambulo }: Props) => {
  useEffect(() => {
    const intervalToCloseResultados = setTimeout(() => {
      setShowPreambulo(true);
    }, 10000);
    return () => {
      clearTimeout(intervalToCloseResultados);
    };
  }, [setShowPreambulo]);
  return (
    <section className="w-full h-full flex justify-center items-center px-16 pt-44 pb-40">
      <div className="relative bg-[#5D87A2] w-full h-full rounded-2xl flex flex-col gap-y-6 px-20 pt-10 pb-24">
        <ColoredTitle
          color="#be0001"
          className="-top-5 left-20 text-white text-4xl py-2 pe-12"
          roundShapeClassName="-left-12 w-20"
          title="RESULTADO OFICIAL DE ÚLTIMA CARRERA"
        />
        <div className="w-full flex justify-center items-center text-9xl gap-x-24 py-12 rounded-4xl bg-[url(/img/background.png)] bg-no-repeat">
          <GalgosNumbers className="w-32 h-32" galgoNumber={7} firstPlace />
          <GalgosNumbers className="w-32 h-32" galgoNumber={2} secondPlace />
          <GalgosNumbers className="w-32 h-32" galgoNumber={1} thirdPlace />
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-x-16 text-6xl text-white uppercase font-bold h-full">
          <div className="flex flex-col justify-center items-center gap-y-4 bg-[url(/img/background.png)] bg-no-repeat rounded-4xl">
            <p className="text-shadow-lg text-shadow-black">Ganador</p>
            <GalgosNumbers className="w-16 h-16" galgoNumber={7} />
            <p className="mt-8 text-5xl">34.75</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4 bg-[url(/img/background.png)] bg-no-repeat rounded-4xl">
            <p className="text-shadow-lg text-shadow-black">Exacta</p>
            <div className="flex gap-x-4">
              <GalgosNumbers className="w-16 h-16" galgoNumber={7} />
              <GalgosNumbers className="w-16 h-16" galgoNumber={2} />
            </div>
            <p className="mt-8 text-5xl">45.60</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4 bg-[url(/img/background.png)] bg-no-repeat rounded-4xl">
            <p className="text-shadow-lg text-shadow-black">Trifecta</p>
            <div className="flex gap-x-4">
              <GalgosNumbers className="w-16 h-16" galgoNumber={7} />
              <GalgosNumbers className="w-16 h-16" galgoNumber={2} />
              <GalgosNumbers className="w-16 h-16" galgoNumber={1} />
            </div>
            <p className="mt-8 text-5xl">87.52</p>
          </div>
        </div>
      </div>
    </section>
  );
};
