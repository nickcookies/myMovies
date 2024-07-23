import flogo from "../assets/logos/flogo.svg";
import dribbble from "../assets/social icons/dribbble.svg";
import facebook from "../assets/social icons/facebook.svg";
import instagram from "../assets/social icons/instagram.svg";
import linkedIn from "../assets/social icons/linkedIn.svg";

export function Footer() {
  return (
    <footer className="flex lg:justify-between items-center lg:flex-row bg-custom-black px-[40px] md:flex-col sm:flex-col md:py-4 sm:py-8">
      <img className="w-[120px]" src={flogo} alt="flogo" />
      <p className="text-light-slate lg:mb-3 lg:text-base lg:items-start lg:w-full flex lg:pl-[10px] sm:text-[10px] sm:text-center sm:mt-4 sm:pl-0">
        | Copyright 2024 HelloMovies. All Rights Reserved
      </p>
      <div className="flex flex-row justify-center sm:mt-4 lg:mt-0">
        <img
          className="w-[25px] h-[25px] mx-[5px] cursor-pointer"
          src={facebook}
          alt="facebook"
        />
        <img
          className="w-[25px] h-[25px] mx-[5px] cursor-pointer"
          src={linkedIn}
          alt="linkedIn"
        />
        <img
          className="w-[25px] h-[25px] mx-[5px] cursor-pointer"
          src={dribbble}
          alt="dribbble"
        />
        <img
          className="w-[25px] h-[25px] mx-[5px] cursor-pointer"
          src={instagram}
          alt="instagram"
        />
      </div>
    </footer>
  );
}
