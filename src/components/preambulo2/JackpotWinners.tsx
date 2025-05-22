import { ColoredTitle } from "../../shared";

const jackpotData = [
  {
    date: "09/04/2027",
    time: "10:03 AM",
    amount: 350458.0,
    hits: 6,
    location: "JUANCITO SPORT - SABANA LARGA",
  },
  {
    date: "09/04/2027",
    time: "10:47 AM",
    amount: 1000.0,
    hits: 3,
    location: "JUANCITO SPORT - AV. VENEZUELA",
  },
  {
    date: "09/04/2027",
    time: "09:00 AM",
    amount: 150687.0,
    hits: 5,
    location: "JUANCITO SPORT - HAINA",
  },
  {
    date: "09/04/2027",
    time: "08:37 AM",
    amount: 350976.0,
    hits: 6,
    location: "JUANCITO SPORT - NACO",
  },
  {
    date: "09/04/2027",
    time: "08:26 AM",
    amount: 55133.0,
    hits: 5,
    location: "JUANCITO SPORT - SABANA LARGA",
  },
];

export const JackpotWinners = () => {
  return (
    <div className="relative w-full h-full  row-span-2 col-span-4 bg-[#5D87A2] rounded-bl-2xl rounded-tr-4xl shadow-table-components px-8 py-4">
      <ColoredTitle
        title="Ganadores del jackpot"
        color="#038E24"
        className="-top-3 text-white text-xl"
      />
      <table className="w-full h-full text-white table-auto border-separate border-spacing-1">
        <tbody className="text-base font-bold uppercase">
          {jackpotData.map((data, index) => {
            return (
              <tr key={index}>
                <td className="bg-[#0F3762] text-center px-2">{data.date}</td>
                <td className="bg-[#0F3762] text-center px-2">{data.time}</td>
                <td className="bg-[#0F3762] text-end px-2">{data.amount}</td>
                <td className="bg-[#0F3762] text-center px-2">
                  {data.hits} Aciertos
                </td>
                <td className="bg-[#0F3762] text-start px-2">
                  {data.location}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
