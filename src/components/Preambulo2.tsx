import { AdSidebar, PredictionTable, RacePreview } from "../shared";
import { JackpotWinners } from "./preambulo2/JackpotWinners";
import { StadisticsTable } from "./preambulo2/StadisticsTable";

export const Preambulo2 = () => {
  return (
    <>
      <StadisticsTable />
      <RacePreview />
      <AdSidebar />
      <JackpotWinners />
      <PredictionTable />
    </>
  );
};
