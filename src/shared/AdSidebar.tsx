import locationIcon from "../assets/img/location-icon.png";

export const AdSidebar = () => {
  return (
    <aside className="w-full h-full row-span-12 bg-[#001F6D] rounded-2xl shadow-ad-sidebar text-white flex flex-col items-center gap-y-16 py-16">
      <header className="flex flex-col items-center justify-center w-full text-center gap-y-4">
        <img
          className="drop-shadow-[-14px_2px_3px_rgba(0,0,0,.41)]"
          src={locationIcon}
          alt="Icono de ubicación"
        />

        <h3 className="text-[#FFEC00] text-4xl uppercase">Juega aquí</h3>
      </header>
      <ul className="text-3xl flex flex-col gap-y-1">
        <li>Juancito</li>
        <li>Real</li>
        <li>Joseph</li>
        <li>La Mina</li>
        <li>AyM</li>
        <li>Joselito</li>
        <li>Virgilio</li>
      </ul>
    </aside>
  );
};
