import photo1 from "../../assets/images/1.jpeg";
import photo2 from "../../assets/images/2.jpg";
import photo3 from "../../assets/images/3.jpg";
import photo4 from "../../assets/images/4.jpg";
import Button from "../../components/Button";

import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="frame8 flex flex-col pl-8">
        <h1 className="font-epilogue text-[64px] font-black" >DNES JE TVŮJ</h1>

        <div className="frame7 flex flex-row gap-[30px]">
            <div className="frame5 flex flex-wrap flex-col items-end gap-[30px]">
              <img src={photo1} alt="photo" className="w-[250px] rounded-4xl" loading="eager"/>
              <img src={photo3} alt="photo" className="w-[360px] rounded-4xl" loading="eager" />
            </div>

            <div className="frame4 flex flex-col gap-[60px]">
              <div className="frame2 flex flex-col">
                <h1 className="font-epilogue text-[64px] font-black" >VELKÝ DEN</h1>

                <img src={photo2} alt="photo" className="w-[550px] rounded-4xl" loading="eager" />
              </div>

              <div className="frame3 flex flex-row content-start gap-[30px]">
                <img src={photo4} alt="photo" className="w-[350px] rounded-4xl" loading="eager" />

                <h1 className="font-epilogue text-[30px] font-black">A JÁ BYCH TI CHTĚL UKÁZAT CO MU PŘEDCHÁZELO</h1>
              </div>
            </div>
        </div>    
      </div>

      <Button onClick={() => navigate("/1", { state: { direction: 1 } })} direction="right" />
    </div>
  )
}
