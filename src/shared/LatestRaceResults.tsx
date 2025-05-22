import { ColoredTitle } from "./ColoredTitle";

export const LatestRaceResults = () => {
  return (
    <div className="relative w-full h-full row-span-4 col-span-4 bg-[#5D87A2] rounded-tr-6xl shadow-table-components px-4 pt-4 pb-2">
      <ColoredTitle
        title="RESULTADO OFICIAL ÚLTIMA CARRERA"
        color="#FF1800"
        className="-top-3 text-white text-xl"
      />
    </div>
  );
};
