import ColScreen from "../components/ColScreen"

import photo17 from "../assets/images/17.jpg"
import photo18 from "../assets/images/18.jpg"
import photo19 from "../assets/images/19.jpg"
import photo20 from "../assets/images/20.jpg"

export default function Home4() {
  return (
    <>
        <ColScreen ptoho1={photo18} ptoho2={photo17} ptoho3={photo20} ptoho4={photo19} text="Naše první společné Vánoce" prevNav="/3" nextNav="/5" />
    </>
  )
}
