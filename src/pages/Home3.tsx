import NextScreen from "../components/ColScreen"

import photo13 from "../assets/images/13.jpg"
import photo14 from "../assets/images/14.jpg"
import photo15 from "../assets/images/15.jpg"
import photo16 from "../assets/images/16.jpg"

export default function Home3() {
  return (
    <>
        <NextScreen ptoho1={photo13} ptoho2={photo14} ptoho3={photo15} ptoho4={photo16} text="které nesou velké vzpomínky" prevNav="/2" nextNav="/4" />
    </>
  )
}
