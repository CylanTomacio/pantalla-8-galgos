import firstPlaceIcon from "../assets/img/first-place-icon.png";
import secondPlaceIcon from "../assets/img/second-place-icon.png";
import thirdPlaceIcon from "../assets/img/third-place-icon.png";

const galgoColor = [
  "galgo-1",
  "number-galgo-2",
  "galgo-3",
  "galgo-4",
  "galgo-5",
  "galgo-6",
  "galgo-7",
  "galgo-8",
];

type Props = {
  galgoNumber: number;
  className?: string;
  positionSize?: string;
  firstPlace?: boolean;
  secondPlace?: boolean;
  thirdPlace?: boolean;
};

export const GalgosNumbers = ({
  galgoNumber,
  className,
  positionSize,
  firstPlace,
  secondPlace,
  thirdPlace,
}: Props) => {
  return (
    <div
      className={`${
        galgoColor[galgoNumber - 1]
      } relative flex justify-center items-center rounded text-black font-bold text-center ${className}`}
    >
      {firstPlace && (
        <img
          className={`absolute ${
            positionSize === "small" ? "-top-1 -left-3 w-7" : "-top-5 -left-5"
          }`}
          src={firstPlaceIcon}
        />
      )}
      {secondPlace && (
        <img
          className={`absolute ${
            positionSize === "small" ? "-top-1 -left-3 w-7" : "-top-5 -left-5"
          }`}
          src={secondPlaceIcon}
        />
      )}
      {thirdPlace && (
        <img
          className={`absolute ${
            positionSize === "small" ? "-top-1 -left-3 w-7" : "-top-5 -left-5"
          }`}
          src={thirdPlaceIcon}
        />
      )}
      <p>{String(galgoNumber)}</p>
    </div>
  );
};
