import previewDemoImg from "../assets/img/preview-demo.png";
import { AdSidebar, PredictionTable } from "../shared";
import { JackpotWinners } from "./preambulo2/JackpotWinners";
import { StadisticsTable } from "./preambulo2/StadisticsTable";

export const Preambulo2 = () => {
  return (
    <>
      <StadisticsTable />
      <div className="relative w-full h-full row-span-4 col-span-4 bg-[#5D87A2] rounded-2xl shadow-table-components px-8 py-4">
        <img className="w-full h-full" src={previewDemoImg} />
      </div>
      <AdSidebar />
      <JackpotWinners />
      <PredictionTable />
    </>
  );
};
