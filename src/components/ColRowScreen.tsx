import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function ColRowScreen(props: {
  ptoho1: string
  ptoho2: string
  ptoho3: string
  ptoho4: string
  text: string
  prevNav: string
  nextNav: string
}) {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex items-center justify-center p-8 overflow-hidden">
      
      <div className="absolute left-10 z-10">
        <Button onClick={() => navigate(props.prevNav, { state: { direction: -1 } })} direction="left" />
      </div>

      <div className="frame10 flex flex-col items-start max-w-7xl">
        <h1 className="font-epilogue text-[64px] font-black leading-[1.1] mb-10 text-left">
          {props.text}
        </h1>

        <div className="frame9 flex items-center justify-start gap-5">
          <div className="flex items-center gap-5">
            <img src={props.ptoho1} alt="photo" className="w-78.75 object-cover rounded-4xl shadow-xl" loading="eager"/>
            <img src={props.ptoho2} alt="photo" className="w-78.75 object-cover rounded-4xl shadow-xl" loading="eager"/>
          </div>

          <div className="flex flex-col items-center gap-5">
            <img src={props.ptoho3} alt="photo" className="h-65 object-cover rounded-4xl shadow-xl" loading="eager"/>
            <img src={props.ptoho4} alt="photo" className="h-65 object-cover rounded-4xl shadow-xl" loading="eager"/>
          </div>
        </div>
      </div>

      <div className="absolute right-10 z-10">
        <Button onClick={() => navigate(props.nextNav, { state: { direction: 1 } })} direction="right" />
      </div>
    </div>
  )
}