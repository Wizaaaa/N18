import photo1 from "../../assets/images/1.jpeg";
import photo2 from "../../assets/images/2.jpg";
import photo3 from "../../assets/images/3.jpg";
import photo4 from "../../assets/images/4.jpg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex items-center justify-center p-8 overflow-hidden">
      <div className="frame8 flex flex-col items-start max-w-7xl">
        <h1 className="font-epilogue text-[64px] font-black leading-[1.1]">
          DNES JE TVŮJ
        </h1>

        <div className="frame7 flex flex-row gap-7.5 items-start mt-4">
          <div className="frame5 flex flex-col items-end gap-7.5">
            <img src={photo1} alt="photo" className="w-62.5 object-cover rounded-4xl shadow-xl" loading="eager" />
            <img src={photo3} alt="photo" className="w-90 object-cover rounded-4xl shadow-xl" loading="eager" />
          </div>

          <div className="frame4 flex flex-col gap-15 items-start">
            <div className="frame2 flex flex-col items-start">
              <h1 className="font-epilogue text-[64px] font-black leading-[1.1]">
                VELKÝ DEN
              </h1>
              <img src={photo2} alt="photo" className="w-137.5 object-cover rounded-4xl shadow-xl" loading="eager" />
            </div>

            <div className="frame3 flex flex-row items-start gap-7.5">
              <img src={photo4} alt="photo" className="w-87.5 object-cover rounded-4xl shadow-xl" loading="eager" />
              <h1 className="font-epilogue text-[30px] font-black max-w-75 text-left leading-tight">
                A JÁ BYCH TI CHTĚL UKÁZAT CO MU PŘEDCHÁZELO
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-10 z-10">
        <Button onClick={() => navigate("/1", { state: { direction: 1 } })} direction="right" />
      </div>
    </div>
  );
}