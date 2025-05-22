import starIcon from "../../assets/img/star.png";

type Props = {
  cellsData: number[];
  starredTimes: number[];
  parentIndex: number;
  maxTime: number;
  minTime: number;
};

export const StadisticsCells = ({
  cellsData,
  parentIndex,
  starredTimes,
  maxTime,
  minTime,
}: Props) => {
  return cellsData.map((data, index) => {
    return (
      <td
        key={data + index}
        className={`relative bg-[#0F3762] border border-white border-b-0 border-e-0 
        ${parentIndex === index ? "bg-[#038E24]" : ""} 
        ${data === maxTime ? "bg-[#F54712]" : ""} 
        ${data === minTime ? "bg-[#BC9E0A]" : ""}
        ${
          parentIndex === cellsData.length - 1 && index === cellsData.length - 1
            ? "rounded-br-4xl"
            : ""
        } 
        `}
      >
        {starredTimes.includes(data) && ( //The latest 3 minimun times shows a star over them
          <img
            width={18}
            className="absolute top-1 right-1"
            src={starIcon}
            alt="Estrella"
          />
        )}

        {data}
      </td>
    );
  });
};
