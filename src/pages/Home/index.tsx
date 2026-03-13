import photo1 from "../../assets/images/1.jpeg"
import photo2 from "../../assets/images/2.jpg"
import photo3 from "../../assets/images/3.jpg"
import photo4 from "../../assets/images/4.jpg"


export default function Home() {
  return (
    <>


      <div className="frame8 flex flex-col pl-8" >
        <h1 className="font-epilogue text-[113px] font-black" >DNES JE TVŮJ</h1>

        <div className="frame7 flex flex-row gap-[30px]">
            <div className="frame5 flex flex-wrap flex-col items-end gap-[30px]">
              <img src={photo1} alt="photo" className="w-[330px] rounded-4xl"/>
              <img src={photo3} alt="photo" className="w-[610px] rounded-4xl" />
            </div>

            <div className="frame4 flex flex-col gap-[80px]">
              <div className="frame2 flex flex-col">
                <h1 className="font-epilogue text-[113px] font-black" >VELKÝ DEN</h1>

                <img src={photo2} alt="photo" className="w-[739px] h-[416px] rounded-4xl" />
              </div>

              <div className="frame3 flex flex-row content-start">
                <img src={photo4} alt="photo" className="w-[438px] h-[263px] rounded-4xl" />

                <h1 className="font-epilogue text-[47px] font-black">A JÁ BYCH TI CHTĚL UKÁZAT CO MU PŘEDCHÁZELO</h1>
              </div>
            </div>
        </div>    
      </div>
    </>
  )
}
