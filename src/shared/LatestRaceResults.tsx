import { ColoredTitle } from "./ColoredTitle";
import { GalgosNumbers } from "./GalgosNumbers";

export const LatestRaceResults = () => {
  return (
    <div className="relative w-full h-full flex flex-col gap-y-2 row-span-4 col-span-4 bg-[#5D87A2] rounded shadow-table-components px-12 pt-4 pb-8">
      <ColoredTitle
        title="RESULTADO OFICIAL ÚLTIMA CARRERA"
        color="#FF1800"
        className="-top-3 text-white text-xl"
      />
      <div className="w-full flex justify-center items-center text-5xl gap-x-12 py-2 rounded-xl bg-soll-blue">
        <GalgosNumbers
          className="w-16 h-16"
          galgoNumber={7}
          positionSize="small"
          firstPlace
        />
        <GalgosNumbers
          className="w-16 h-16"
          galgoNumber={2}
          positionSize="small"
          secondPlace
        />
        <GalgosNumbers
          className="w-16 h-16"
          galgoNumber={1}
          positionSize="small"
          thirdPlace
        />
      </div>
      <div className="grid grid-rows-1 grid-cols-3 gap-x-4 text-2xl text-white uppercase font-bold h-full">
        <div className="flex flex-col justify-center items-center gap-y-2 bg-soll-blue rounded-xl">
          <p className="text-shadow-lg text-shadow-black">Ganador</p>
          <GalgosNumbers
            className="w-8 h-8"
            galgoNumber={7}
            positionSize="small"
          />
          <p className="text-xl">34.75</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2 bg-soll-blue rounded-xl">
          <p className="text-shadow-lg text-shadow-black">Exacta</p>
          <div className="flex gap-x-2">
            <GalgosNumbers
              className="w-8 h-8"
              galgoNumber={7}
              positionSize="small"
            />
            <GalgosNumbers
              className="w-8 h-8"
              galgoNumber={2}
              positionSize="small"
            />
          </div>
          <p className="text-xl">45.60</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2 bg-soll-blue rounded-xl">
          <p className="text-shadow-lg text-shadow-black">Trifecta</p>
          <div className="flex gap-x-2">
            <GalgosNumbers
              className="w-8 h-8"
              galgoNumber={7}
              positionSize="small"
            />
            <GalgosNumbers
              className="w-8 h-8"
              galgoNumber={2}
              positionSize="small"
            />
            <GalgosNumbers
              className="w-8 h-8"
              galgoNumber={1}
              positionSize="small"
            />
          </div>
          <p className="text-xl">87.52</p>
        </div>
      </div>
    </div>
  );
};
