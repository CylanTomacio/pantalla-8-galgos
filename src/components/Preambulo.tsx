import { useEffect, useState } from "react";
import { Preambulo1 } from "./Preambulo1";
import { Preambulo2 } from "./Preambulo2";

type Props = {
  setVideoEnded: (showVideo: boolean) => void;
  setShowPreambulo: (showPreambulo: boolean) => void;
};

export const Preambulo = ({ setVideoEnded, setShowPreambulo }: Props) => {
  const [changePreambulo, setChangePreambulo] = useState(false);

  useEffect(() => {
    const changePreambuloInterval = setInterval(() => {
      setChangePreambulo(!changePreambulo);
      console.log("Preambulo Changed");
    }, 15000);

    return () => {
      clearInterval(changePreambuloInterval);
    };
  });

  useEffect(() => {
    const showVideoAgainInterval = setTimeout(() => {
      console.log("Show race");
      setVideoEnded(false);
      setShowPreambulo(false);
    }, 60000);

    return () => {
      clearInterval(showVideoAgainInterval);
    };
  }, [setVideoEnded, setShowPreambulo]);

  return (
    <section className="w-full h-full grid grid-cols-9 grid-rows-6 px-12 py-36 gap-x-4 gap-y-6">
      {!changePreambulo ? <Preambulo1 /> : <Preambulo2 />}
    </section>
  );
};
