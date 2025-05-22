import logoSoll from "../assets/img/logo-soll.png";
import ukIcon from "../assets/img/uk-icon.png";

type Props = {
  showTimer: boolean;
};

export const Header = ({ showTimer }: Props) => {
  return (
    <header className="absolute w-full h-24 top-6 flex px-36 text-white text-4xl justify-center items-center gap-x-4 z-50">
      <div className="bg-[#0000BC] pe-16 h-full flex items-center skew-x-[40deg] drop-shadow-header">
        <div className="absolute bg-[#0000BC] h-full w-32 -skew-x-[40deg] -left-20 rounded-l-full flex flex-col overflow-hidden"></div>
        <img
          className="-skew-x-[40deg]"
          width={160}
          src={logoSoll}
          alt="Logo de Soll Systems"
        />
      </div>
      <div className="flex gap-x-16 items-center bg-[#001F6D] px-16 h-full skew-x-[40deg] drop-shadow-header">
        <div className="flex items-center gap-x-2 -skew-x-[40deg]">
          <p className="text-nowrap">5104 - Central Park</p>
          <img width={72} src={ukIcon} alt="" />
        </div>
        <div className="flex gap-x-4 -skew-x-[40deg]">
          <p>A6</p>
          <p>500m</p>
        </div>
      </div>
      <div
        className={`bg-[#001F6D] h-full flex items-center skew-x-[40deg] drop-shadow-header ${
          !showTimer ? "px-16" : ""
        }`}
      >
        <p className="text-nowrap -skew-x-[40deg] px-6">01:06 PM</p>
        {showTimer && (
          <div className="text-nowrap bg-[#ffec00] w-full h-full flex items-center px-6">
            <p className="-skew-x-[40deg] text-black font-bold">01:33</p>
          </div>
        )}
      </div>
      <div className="relative flex flex-col max-w-56 h-full skew-x-[40deg] drop-shadow-header">
        <div className="absolute h-full w-36 -skew-x-[40deg] -right-20 rounded-r-full flex flex-col overflow-hidden">
          <div className="bg-[#001F6D] w-full h-full"></div>
          <div className="bg-black w-full h-full"></div>
        </div>
        <div className="font-bold uppercase bg-[#001F6D] py-1 text-end">
          <p className="-skew-x-[40deg]">Jackpot</p>
        </div>
        <div className="font-bold text-[#ffec00] text-[2.8rem] leading-10 text-end h-full bg-black">
          <p className="-skew-x-[40deg] ms-6">500,000.00</p>
        </div>
      </div>
    </header>
  );
};
