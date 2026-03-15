import ColRowScreen from "../components/ColRowScreen"

import photo21 from "../assets/images/21.jpg"
import photo22 from "../assets/images/22.jpg"
import photo23 from "../assets/images/23.jpg"
import photo24 from "../assets/images/24.jpg"

export default function Home5() {
  return (
    <>
        <ColRowScreen ptoho1={photo21} ptoho2={photo22} ptoho3={photo23} ptoho4={photo24} text="Tvoje narozeniny a nebo první společné pečení" prevNav="/4" nextNav="/6" />
    </>
  )
}
