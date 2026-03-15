import NextScreen from "../components/ColScreen"

import photo5 from "../assets/images/5.jpg"
import photo6 from "../assets/images/6.jpg"
import photo7 from "../assets/images/7.jpg"
import photo8 from "../assets/images/8.jpg"

export default function Home1() {
  return (
    <>
        <NextScreen ptoho1={photo5} ptoho2={photo7} ptoho3={photo8} ptoho4={photo6} text="Takže musíme začít hezky od začátku" prevNav="/" nextNav="/2" />
    </>
  )
}
