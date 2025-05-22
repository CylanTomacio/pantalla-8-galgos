import { GalgosNumbers } from "../../shared";

const dogsData = [
  {
    position: "1",
    dog: "Barnside Belie",
    streak: "63134",
    odds: "1.62¹",
    bet: "21,030.00",
  },
  {
    position: "2",
    dog: "Knotmor Patsy",
    streak: "42431",
    odds: "2.25²",
    bet: "94,600.00",
  },
  {
    position: "3",
    dog: "Yankee Vixen",
    streak: "T5351",
    odds: "5.00³",
    bet: "6,850.00",
  },
  {
    position: "4",
    dog: "Takeiteasykitty",
    streak: "33222",
    odds: "R",
    bet: "0",
  },
  {
    position: "5",
    dog: "Deakon Zuky",
    streak: "34253",
    odds: "8.00",
    bet: "54,345.00",
  },
  {
    position: "6",
    dog: "Iluminating",
    streak: "42643",
    odds: "9.00",
    bet: "110,300.00",
  },
];

export const BetTable = () => {
  return (
    <div className="relative w-full h-full row-span-4 col-span-4 bg-[#5D87A2] rounded-tl-[4rem] rounded-br-[4rem] shadow-table-components px-8 pt-8 pb-4 z-20">
      <header className="absolute grid grid-cols-20 w-[90%] h-13 top-8 text-white text-3xl text-center ps-12 pe-6 -z-10">
        <div className="relative bg-[#0F3762] skew-x-[40deg] py-2 me-2 text-center col-span-7">
          <div className="absolute bg-[#0F3762] h-full w-20 -skew-x-[40deg] bottom-0 -left-12 rounded-l-full"></div>
        </div>
        <div className="bg-[#0F3762] skew-x-[40deg] py-2 me-2 col-span-4"></div>
        <div className="bg-[#0F3762] skew-x-[40deg] py-2 me-2 col-span-4"></div>
        <div className="relative bg-[#0F3762] skew-x-[40deg] ps-4 py-2 me-2 col-span-5">
          <div className="absolute bg-[#0F3762] h-full w-20 -skew-x-[40deg] top-0 -right-12 rounded-r-full flex flex-col overflow-hidden"></div>
        </div>
      </header>
      <table className="w-full h-full text-white table-auto border-separate border-spacing-y-1 text-center z-50">
        <thead className="text-4xl">
          <tr>
            <td colSpan={2} className="pb-2">
              Galgo
            </td>
            <td className="pb-2">Racha</td>
            <td className="pb-2">Cuota</td>
            <td className="pb-2">Apostado</td>
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
