import { useNavigate } from "react-router-dom";
import hlogo from "../assets/logos/hlogo.svg";

export function Header() {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };
  return (
    <header className="lg:px-[40px] py-[15px] cursor-pointer md:px-[20px] sm:px-[16px]">
      <img
        className="lg:w-[213px] h-[100%] sm:w-[133px]"
        src={hlogo}
        alt="hlogo"
        onClick={returnToHome}
      />
    </header>
  );
}
