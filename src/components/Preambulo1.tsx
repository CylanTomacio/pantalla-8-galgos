import { AdSidebar, PredictionTable, RacePreview } from "../shared";
import { BetTable } from "./preambulo1/BetTable";
import { HighPrizeWinnersTable } from "./preambulo1/HighPrizeWinnersTable";

export const Preambulo1 = () => {
  return (
    <>
      <BetTable />
      <RacePreview />
      <AdSidebar />
      <PredictionTable />
      <HighPrizeWinnersTable />
    </>
  );
};
