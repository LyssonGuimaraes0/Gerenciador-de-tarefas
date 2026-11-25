import { ChevronLeftIcon } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function TaskPage() {

    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return (
        <div className="w-screen h-screen bg-sky-300 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative">
                    <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 p-1 rounded-md text-amber-50 cursor-pointer
                    bg-gray-700">
                        <ChevronLeftIcon />
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes da Tarefa</h1>
                </div>
                <div className="bg-gray-700 p-6 rounded-sm space-y-3">
                    <h2 className="text-xl text-slate-100 font-bold">{title}</h2>
                    <p className="text-slate-100">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage