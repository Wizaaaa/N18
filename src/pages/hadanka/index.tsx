import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import photo49 from "../../assets/images/49.jpg";
import photo50 from "../../assets/images/50.jpg";

export default function Hadanka() {
  const navigate = useNavigate();
  const correctAnswer = "080819121907"
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (answer === correctAnswer) {
        navigate("/")
    }
  }, [answer, navigate])

  return (
    <div className="relative h-screen w-full flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute left-10 z-10">
        <Button
          onClick={() => navigate("/10", { state: { direction: -1 } })}
          direction="left"
        />
      </div>

      <div className="flex flex-row items-center justify-center gap-12 max-w-7xl">
        <img
          src={photo49}
          alt="photo"
          className="w-78.75 h-112.5 object-cover rounded-4xl shadow-xl shrink-0"
          loading="eager"
        />

        <div className="flex flex-col items-center text-center">
          <h1 className="font-epilogue text-[48px] font-black leading-[1.1] mb-8">
            Myslím si, že by si to zasloužilo trochu podrobněji připomenout, ale na to nejdříve musíš vyplnit moji hádanku
          </h1>

          <span className="text-[80px]">🧑🏻‍❤️‍💋‍👩🏼|💃🕺|⛰️</span> {/* 0808 1912 1907*/}

          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Napiš odpověď..."
            className="w-full max-w-md px-6 py-4 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 font-epilogue text-xl outline-none focus:border-white/50 transition-all mb-6 text-center"
          />
        </div>

        <img
          src={photo50}
          alt="photo"
          className="w-78.75 h-112.5 object-cover rounded-4xl shadow-xl shrink-0"
          loading="eager"
        />
      </div>
    </div>
  );
}