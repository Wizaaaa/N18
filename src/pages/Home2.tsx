import NextScreen from "../components/ColScreen"

import photo9 from "../assets/images/9.webp"
import photo10 from "../assets/images/10.jpg"
import photo11 from "../assets/images/11.jpg"
import photo12 from "../assets/images/12.jpg"

export default function Home2() {
  return (
    <>
        <NextScreen ptoho1={photo9} ptoho2={photo10} ptoho3={photo11} ptoho4={photo12} text="Jedny z našich prvních fotek" prevNav="/1" nextNav="/3" />
    </>
  )
}
