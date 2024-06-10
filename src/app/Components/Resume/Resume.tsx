import Services from "../Services/Services"

export const Resume = () => {
  return (
    <>
    <div className="w-full max-h-screen">
        <div className="mx-auto max-w-[1240px] flex flex-col">
            <div className="flex px-6 justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-zinc-950 font-semibold ">Olá Gabriel</span>
                    <p className="text-sm text-zinc-400">Seu Balanço Disponível</p>
                </div>

                <div className="text-2xl uppercase font-bold">
                    <h1>R$15,901</h1>
                </div>
            </div>

            <Services />

            <h1 className="px-6 text-lg font-semibold">Resumo do Mês</h1>

            <div className="px-6 flex flex-col">
                <div className="p-6 rounded-xl bg-zinc-100 my-6 flex justify-between items-center">
                    <h1 className="font-semibold">Receita Mensal</h1>
                    <span className="text-[#4CD080] font-semibold">R$0,00</span>
                </div>

                <div className="p-6 rounded-xl bg-zinc-100 my-1 flex justify-between items-center">
                    <h1 className="font-semibold">Despesa Mensal</h1>
                    <span className="text-[#EA1313] font-semibold">R$0,00</span>
                </div>

            </div>


            <div className="flex justify-between items-center px-6 my-12">
            <h1 className="text-lg font-semibold">Acesso Rápido</h1>
            <p className="text-[#fc6625] text-sm">ver mais</p>
            </div>
        </div>

    </div>
    </>
  )
}
