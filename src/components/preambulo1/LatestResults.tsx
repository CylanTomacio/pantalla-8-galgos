import { ColoredTitle, GalgosNumbers } from "../../shared";

const latestResultsData = [
  {
    time: "01:03 PM",
    race: "C-101",
    location: "Sunderland",
    distance: "500m",
    winners: [4, 2, 6],
    odds: 1.67,
  },
  {
    time: "01:00 PM",
    race: "C-102",
    location: "Nottingham",
    distance: "475m",
    winners: [1, 3, 5],
    odds: 2.0,
  },
  {
    time: "12:57 PM",
    race: "C-103",
    location: "Swindon",
    distance: "450m",
    winners: [3, 4, 1],
    odds: 1.25,
  },
  {
    time: "12:54 PM",
    race: "C-104",
    location: "Sunderland",
    distance: "475m",
    winners: [2, 6, 1],
    odds: 3.4,
  },
  {
    time: "12:51 PM",
    race: "C-105",
    location: "Sunderland",
    distance: "450m",
    winners: [1, 3, 5],
    odds: 1.83,
  },
  {
    time: "12:49 PM",
    race: "C-106",
    location: "Nottingham",
    distance: "500m",
    winners: [3, 4, 1],
    odds: 5.0,
  },
  {
    time: "12:46 PM",
    race: "C-107",
    location: "Nottingham",
    distance: "475m",
    winners: [4, 2, 6],
    odds: 2.6,
  },
  {
    time: "12:43 PM",
    race: "C-108",
    location: "Swindon",
    distance: "500m",
    winners: [1, 3, 5],
    odds: 1.33,
  },
  {
    time: "12:40 PM",
    race: "C-109",
    location: "Sunderland",
    distance: "475m",
    winners: [3, 4, 1],
    odds: 2.0,
  },
  {
    time: "12:37 PM",
    race: "C-110",
    location: "Swindon",
    distance: "450m",
    winners: [1, 3, 5],
    odds: 1.47,
  },
];

export const LatestResults = () => {
  return (
    <div className="relative w-full h-full row-span-4 col-span-4 bg-[#5D87A2] rounded-2xl shadow-table-components px-8 pt-13 pb-4">
      <ColoredTitle
        title="Últimos resultados"
        color="#BE0001"
        className="-top-4 text-white text-xl"
      />
      <header className="absolute grid grid-rows-1 grid-cols-11 w-[90%] top-4 text-white text-xl ps-7.5 pe-5">
        <div className="realtive bg-[#0F3762] skew-x-[40deg] py-1 me-1 text-start">
          <div className="absolute bg-[#0F3762] h-full w-12 -skew-x-[40deg] top-0 -left-8 rounded-l-full flex flex-col overflow-hidden"></div>
          <p className="-skew-x-[40deg]">Hora</p>
        </div>
        <div className="bg-[#0F3762] skew-x-[40deg] ps-4 py-1 me-1 col-span-2">
          <p className="-skew-x-[40deg]">Carrera</p>
        </div>
        <div className="bg-[#0F3762] skew-x-[40deg] ps-4 py-1 me-1 col-span-3">
          <p className="-skew-x-[40deg]">Canódromo</p>
        </div>
        <div className="bg-[#0F3762] skew-x-[40deg] ps-4 py-1 me-1 col-span-2">
          <p className="-skew-x-[40deg]">Distancia</p>
        </div>
        <div className="bg-[#0F3762] skew-x-[40deg] ps-4 py-1 me-1 col-span-2">
          <p className="-skew-x-[40deg]">Ganadores</p>
        </div>
        <div className="bg-[#0F3762] skew-x-[40deg] text-end py-1">
          <div className="absolute bg-[#0F3762] h-full w-14 -skew-x-[40deg] top-0 -right-9 rounded-r-full flex flex-col overflow-hidden"></div>
          <p className="-skew-x-[40deg]">Cuota</p>
        </div>
      </header>
      <table className="w-full h-full table-auto border-separate border-spacing-y-1.5">
        <tbody className="text-base font-bold text-white">
          {latestResultsData.map((resultData, index) => {
            return (
              <tr key={index}>
                <td className="bg-[#0F3762] rounded-s-full ps-5 whitespace-nowrap w-[15%]">
                  {resultData.time}
                </td>
                <td className="bg-[#0F3762]">{resultData.race}</td>
                <td className="bg-[#0F3762]">
                  <p className="ps-10">{resultData.location}</p>
                </td>
                <td className="bg-[#0F3762]">{resultData.distance}</td>
                <td className="bg-[#0F3762]">
                  <div className="flex gap-x-2 justify-center">
                    {resultData.winners.map((winner, index) => {
                      return (
                        <GalgosNumbers
                          key={"galgo-number-" + index}
                          className="w-5 h-5 text-sm"
                          galgoNumber={winner}
                        />
                      );
                    })}
                  </div>
                </td>
                <td className="bg-[#0F3762] text-start rounded-e-full pe-5  whitespace-nowrap w-[10%]">
                  {resultData.odds}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
