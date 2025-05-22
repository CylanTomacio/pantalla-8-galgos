import whiteGalgoIcon from "../assets/img/white-galgo.png";
import blackGalgoIcon from "../assets/img/black-galgo.png";
import redGalgoIcon from "../assets/img/red-galgo.png";

type Props = {
  galgoNumber: number;
  position: string;
};

const galgoColor = [
  "galgo-1",
  "galgo-2",
  "galgo-3",
  "galgo-4",
  "galgo-5",
  "galgo-6",
];

export const GalgoLoadingBar = ({ galgoNumber, position }: Props) => {
  return (
    <div className="w-full rounded-r-full bg-[#0F3762]">
      {position === "0" ? (
        <div className="text-white text-2xl font-bold ps-4 flex items-center h-full">
          <p>Retirado</p>
        </div>
      ) : (
        <div
          style={{
            width: position + "%",
          }}
          className={`h-full rounded-r-full px-2 py-1 flex justify-end ${
            galgoColor[galgoNumber - 1]
          }`}
        >
          {(galgoNumber < 3 || galgoNumber === 4) && (
            <img width={50} src={whiteGalgoIcon} />
          )}
          {(galgoNumber === 3 || galgoNumber === 5) && (
            <img width={50} src={blackGalgoIcon} />
          )}
          {galgoNumber === 6 && <img width={50} src={redGalgoIcon} />}
        </div>
      )}
    </div>
  );
};
