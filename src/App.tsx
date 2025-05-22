import { useEffect, useState } from "react";
import { Results, Carrera, Preambulo } from "./components";
import { Footer, Header } from "./shared";

function App() {
  const [videoEnded, setVideoEnded] = useState<boolean>(true);
  const [showPreambulo, setShowPreambulo] = useState<boolean>(true);
  const [showTimer, setShowTimer] = useState<boolean>(true);

  useEffect(() => {
    if (videoEnded) {
      setShowTimer(true);
    } else {
      setShowTimer(false);
    }
  }, [videoEnded]);

  return (
    <main className="relative w-screen max-w-screen h-[1080px] max-h-[1080px] overflow-hidden bg-[url(/img/background.png)] font-myriad">
      <Header showTimer={showTimer} />
      {videoEnded && !showPreambulo && (
        <Results setShowPreambulo={setShowPreambulo} />
      )}
      {!videoEnded && <Carrera setVideoEnded={setVideoEnded} />}
      {showPreambulo && (
        <Preambulo
          setVideoEnded={setVideoEnded}
          setShowPreambulo={setShowPreambulo}
        />
      )}
      {videoEnded && <Footer />}
    </main>
  );
}

export default App;
