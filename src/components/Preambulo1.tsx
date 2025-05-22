import { AdSidebar, PredictionTable } from "../shared";
import { BetTable } from "./preambulo1/BetTable";
import { HighPrizeWinnersTable } from "./preambulo1/HighPrizeWinnersTable";
import { LatestResults } from "./preambulo1/LatestResults";

export const Preambulo1 = () => {
  return (
    <>
      <BetTable />
      <LatestResults />
      <AdSidebar />
      <HighPrizeWinnersTable />
      <PredictionTable />
    </>
  );
};
