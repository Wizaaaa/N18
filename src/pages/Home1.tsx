import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import photo5 from "../assets/images/5.jpg"
import photo6 from "../assets/images/6.jpg"
import photo7 from "../assets/images/7.jpg"
import photo8 from "../assets/images/8.jpg"

export default function Home1() {
    const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen min-w-screen flex items-center justify-center p-8">
        <Button onClick={() => navigate("/", { state: { direction: -1 } })} direction="left" />

        <div className="frame10 flex flex-col ">
          <h1 className="font-epilogue text-[64px] font-black" >DNES JE TVŮJ</h1>

          <div className="frame9 flex">
            <div className="flex items-center gap-[20px] pr-[20px]">
              <img src={photo5} alt="photo" className="w-[315px] rounded-4xl" loading="eager"/>
              <img src={photo7} alt="photo" className="w-[240px] h-[320px] rounded-4xl" loading="eager"/>
            </div>

            <div className="flex items-center gap-[20px]">
              <img src={photo8} alt="photo" className="w-[260px] h-[348px] rounded-4xl" loading="eager"/>
              <img src={photo6} alt="photo" className="w-[290px] rounded-4xl" loading="eager"/>
            </div>
          </div>
        </div>

        <Button onClick={() => navigate("", { state: { direction: 1 } })} direction="right" />
      </div>
    </>
  )
}
