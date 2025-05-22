import { GalgosNumbers } from "../../shared";

const dogsData = [
  {
    position: 1,
    dog: "Rose Bordeaux",
    streak: 36232,
    odds: 2.25,
    bet: 21030.0,
  },
  {
    position: 2,
    dog: "Brenton Barnacle",
    streak: "f131",
    odds: 2.5,
    bet: 94600.0,
  },
  {
    position: 3,
    dog: "Simply Simon",
    streak: 21628,
    odds: 3.0,
    bet: 6850.0,
  },
  {
    position: 4,
    dog: "Freeway Mick",
    streak: 23371,
    odds: 6.0,
    bet: 3765.0,
  },
  {
    position: 5,
    dog: "Vacante",
    streak: null,
    odds: null,
    bet: 0,
  },
  {
    position: 6,
    dog: "Our Casey",
    streak: 17782,
    odds: 9.0,
    bet: 110300.0,
  },
  {
    position: 7,
    dog: "It's Gold",
    streak: 61851,
    odds: 33.0,
    bet: 9760.0,
  },
  {
    position: 8,
    dog: "Harrita's Due In",
    streak: 32111,
    odds: 17.0,
    bet: 12300.0,
  },
];

export const BetTable = () => {
  return (
    <div className="relative w-full h-full row-span-9 col-span-4 bg-[#5D87A2] rounded-tl-[4rem] rounded-br-[4rem] shadow-table-components px-8 py-2 z-20">
      <table className="w-full h-full text-white table-auto border-separate border-spacing-y-1 text-center z-50">
        <thead className="text-4xl">
          <tr>
            <td
              colSpan={2}
              className="bg-[#0F3762] py-3 border-e-4 border-[#5D87A2] rounded-l-full"
            >
              Galgo
            </td>
            <td className="bg-[#0F3762] py-3 border-e-4 border-[#5D87A2]">
              Racha
            </td>
            <td className="bg-[#0F3762] py-3 border-e-4 border-[#5D87A2]">
              Cuota
            </td>
            <td className="bg-[#0F3762] py-3 rounded-r-full">Apostado</td>
          </tr>
        </thead>
        <tbody className="text-2xl">
          {dogsData.map((dogData, index) => {
            return (
              <tr key={index}>
                <td className="bg-[#0F3762] rounded-l-full border-e-4 border-[#5D87A2] ps-4 pe-1">
                  <GalgosNumbers
                    className="inline-block text-4xl w-10 h-10"
                    galgoNumber={Number(dogData.position)}
                  />
                  {/* <span className="border rounded px-3 py-0.5 text-3xl">
                    {dogData.position}
                  </span> */}
                </td>
                <td className="bg-[#0F3762] text-start ps-4">{dogData.dog}</td>
                <td className="bg-[#0F3762]">{dogData.streak}</td>
                <td className="bg-[#0F3762]">{dogData.odds}</td>
                <td className="bg-[#0F3762] rounded-r-full text-[#00FF36] text-end pe-4">
                  {dogData.bet}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
