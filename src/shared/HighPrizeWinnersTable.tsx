import { ColoredTitle } from ".";

const winnersData = [
  {
    time: "11:05 AM",
    agencies: "JUANCITO SPORT - SABANA LARGA",
    betType: "GANADOR (4)",
    prize: "150,000.00",
  },
  {
    time: "12:20 PM",
    agencies: "JUANCITO SPORT - AV. VENEZUELA",
    betType: "EXACTA BOX (3 + 2)",
    prize: "550,000.00",
  },
  {
    time: "10:00 AM",
    agencies: "JUANCITO SPORT - SABANA LARGA",
    betType: "TRIFECTA (6 + 2 + 5)",
    prize: "1,150,000.00",
  },
];

export const HighPrizeWinnersTable = () => {
  return (
    <div className="relative w-full h-full row-span-3 col-span-4 bg-[#5D87A2] rounded-tr-6xl shadow-table-components px-4 pt-4 pb-2">
      <ColoredTitle
        title="GANADORES DE PREMIOS ALTOS"
        color="#038E24"
        className="-top-3 text-white text-xl"
      />
      <table className="w-full h-full text-white table-auto border-separate border-spacing-1">
        <tbody className="text-lg font-bold">
          {winnersData.map((winner, index) => {
            return (
              <tr key={index}>
                <td className="bg-[#0F3762] text-center">{winner.time}</td>
                <td className="bg-[#0F3762] px-2">{winner.agencies}</td>
                <td className="bg-[#0F3762] px-2">{winner.betType}</td>
                <td className="bg-[#0F3762] text-end px-2">{winner.prize}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
