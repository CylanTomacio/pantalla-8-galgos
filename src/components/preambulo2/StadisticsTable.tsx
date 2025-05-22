import { getMaxTimeFromMatrix, getMinTimeFromMatrix } from "../../helpers";
import { StadisticsCells } from "./StadisticsCells";
import { GalgosNumbers } from "../../shared";

import arrowIcon from "../../assets/img/arrow-icon.png";

const racesData = [
  [8.29, 37.66, 93.21, 30.48, 115.58, 151.41, 109.32, 80.43],
  [19.24, 3.65, 114.15, 37.41, 142.71, 188.63, 77.24, 73.41],
  [31.33, 61.46, 8.33, 52.99, 162.21, 215.49, 43.12, 25.99],
  [18.14, 43.97, 110.6, 4.1, 137.37, 181.24, 62.8, 1.4],
  [35.95, 67.25, 135.85, 58.62, 5.19, 221.55, 34.21, 58.62],
  [42.74, 78.32, 147.74, 68.76, 176.22, 3.74, 16.14, 68.76],
  [37.33, 23.65, 141.15, 28.37, 37.63, 22.71, 31.74, 28.37],
  [34.33, 24.74, 16.46, 9.15, 68.76, 42.71, 53.9, 1.95],
];

export const StadisticsTable = () => {
  const starredTimes = racesData
    .map((data, index) => data[index])
    .sort((a, b) => a - b)
    .slice(0, 3);

  return (
    <div className="relative w-full h-full row-span-9 col-span-4 bg-[#5D87A2] rounded-br-8xl rounded-tl-8xl shadow-table-components px-8 py-4">
      <div className="relative w-full h-full ps-10 pt-10 bg-[#0F3762] rounded-br-8xl rounded-tl-8xl">
        <div className="absolute top-[2rem] left-[4rem]">
          <p className="text-white text-sm leading-1.5 uppercase italic">2do</p>
          <img width={40} src={arrowIcon} alt="Flecha" />
        </div>
        <div className="absolute top-[3.6rem] left-6">
          <p className="text-white text-sm leading-0 uppercase italic">1er</p>
          <img
            width={40}
            className="rotate-90 inline-block ms-3 -mt-4"
            src={arrowIcon}
            alt="Flecha"
          />
        </div>
        <header className="absolute text-white top-1 text-center w-full">
          <h2 className="text-2xl uppercase font-bold -skew-x-12">
            Llega en 2do lugar
          </h2>
        </header>
        <header className="absolute text-white top-80 -left-[5.6rem] -rotate-90">
          <h2 className="text-2xl uppercase font-bold -skew-x-12">
            Llega en 1er lugar
          </h2>
        </header>
        <table className="w-full h-full text-white table-auto border-collapse text-center text-lg font-bold">
          <thead>
            <tr>
              <td className="border-4 border-t-0 border-s-0"></td>
              {racesData.map((_, index) => {
                return (
                  <th
                    key={index}
                    className="bg-[#5D87A2] py-1 border border-white border-t-0 border-e-0 border-b-4"
                  >
                    <GalgosNumbers
                      className="inline-block text-4xl w-10 h-10"
                      galgoNumber={Number(index + 1)}
                    />
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {racesData.map((raceData, index) => {
              return (
                <tr key={index}>
                  <td className="bg-[#5D87A2] border border-white border-b-0 border-s-0 border-e-4">
                    <GalgosNumbers
                      className="inline-block text-4xl w-10 h-10"
                      galgoNumber={Number(index + 1)}
                    />
                  </td>
                  <StadisticsCells
                    cellsData={raceData}
                    parentIndex={index}
                    starredTimes={starredTimes}
                    maxTime={getMaxTimeFromMatrix(racesData)}
                    minTime={getMinTimeFromMatrix(racesData)}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
