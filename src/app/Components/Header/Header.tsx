import Image from "next/image";
import logo from "../../Assets/Logo.svg"
import { CiSettings } from "react-icons/ci";


const Header = () => {
  return (
    <>
    <header className="w-full h-[101px]">
        <div className="w-full h-full flex justify-between lg:mx-auto px-6 max-w-[1240px] items-center">
            <Image src={logo} width={75} alt=""/>
            <div className="w-10 h-10 border border-zinc-300 shadow-md flex justify-center items-center rounded-xl">
                <CiSettings size={20}/>
            </div>

        </div>

    </header>
    </>
  )
}

export default Header;