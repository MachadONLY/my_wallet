import { GoHistory } from "react-icons/go"
import { MdOutlineAddCard } from "react-icons/md"
import { TbReportAnalytics } from "react-icons/tb"



const Services = () => {
  return (
    <>
    <div className="w-full h-[80px] my-6">
        <div className="w-[90%] rounded-2xl h-full flex justify-center items-center mx-auto bg-[#Fc6625]">
            <div className="flex justify-center gap-12 items-center">
                <div className="flex flex-col items-center text-zinc-50">
                <TbReportAnalytics size={25} />
                    <h1 className="text-sm py-1">Relatorio</h1>
                </div>

                <div className="flex flex-col items-center text-zinc-50">
                <MdOutlineAddCard size={25} />
                    <h1 className="text-sm py-1">Cartões</h1>
                </div>

                <div className="flex flex-col items-center text-zinc-50">
                <GoHistory size={25} />
                    <h1 className="text-sm py-1">Historico</h1>
                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default Services