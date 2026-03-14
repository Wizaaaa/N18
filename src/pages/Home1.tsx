import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home1() {
    const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/", { state: { direction: -1 } })} direction="left" />


      <Button onClick={() => navigate("", { state: { direction: 1 } })} direction="right" />
    </>
  )
}
