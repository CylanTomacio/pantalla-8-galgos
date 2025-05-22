import { AdSidebar, LatestRaceResults, RacePreview } from "../shared";
import { BetTable } from "./preambulo1/BetTable";
import { HighPrizeWinnersTable } from "../shared/HighPrizeWinnersTable";

export const Preambulo1 = () => {
  return (
    <>
      <BetTable />
      <RacePreview />
      <AdSidebar />
      <LatestRaceResults />
      <HighPrizeWinnersTable />
    </>
  );
};
