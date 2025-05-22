import { useCallback } from "react";

type Props = {
  setVideoEnded: (isVideoEnded: boolean) => void;
};

export const Carrera = ({ setVideoEnded }: Props) => {
  const handleVideoEnded = useCallback(() => {
    setVideoEnded(true);
    console.log("Video has ended");
  }, [setVideoEnded]);
  return (
    <section className="relative w-full h-full">
      <video
        className="w-full h-full"
        autoPlay
        playsInline
        muted
        onEnded={handleVideoEnded}
      >
        <source
          src={`/video/test-video-${Math.floor(Math.random() * 3)}.mp4`}
          type="video/mp4"
        />
      </video>
    </section>
  );
};
