import { AdSidebar, LatestRaceResults, RacePreview } from "../shared";
import { HighPrizeWinnersTable } from "../shared/HighPrizeWinnersTable";
import { StadisticsTable } from "./preambulo2/StadisticsTable";

export const Preambulo2 = () => {
  return (
    <>
      <StadisticsTable />
      <RacePreview />
      <AdSidebar />
      <LatestRaceResults />
      <HighPrizeWinnersTable />
    </>
  );
};
