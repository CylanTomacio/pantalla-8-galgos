import { ColoredTitle } from "./ColoredTitle";
import { GalgoLoadingBar } from "./GalgoLoadingBar";
import { GalgosNumbers } from "./GalgosNumbers";

export const PredictionTable = () => {
  return (
    <div className="relative w-full h-full row-span-3 col-span-4 bg-[#5D87A2] rounded-2xl shadow-table-components px-8 py-4">
      <ColoredTitle
        title="Predicción"
        color="#E06920"
        className="-top-4 text-white text-xl"
      />
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-1">
        <div className="flex items-center gap-x-1 w-full">
          <GalgosNumbers className="w-8 h-8 text-3xl" galgoNumber={1} />
          <GalgoLoadingBar galgoNumber={1} position="100" />
        </div>
        <div className="flex items-center gap-x-1 w-full">
          <GalgosNumbers className="w-8 h-8 text-3xl" galgoNumber={2} />
          <GalgoLoadingBar galgoNumber={2} position="70" />
        </div>
        <div className="flex items-center gap-x-1 w-full">
          <GalgosNumbers className="w-8 h-8 text-3xl" galgoNumber={3} />
          <GalgoLoadingBar galgoNumber={3} position="55" />
        </div>
      </div>
    </div>
  );
};
