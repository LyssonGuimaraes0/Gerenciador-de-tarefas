import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

//Criação de components de lista de task
function Tasks(props) {

    const navigate = useNavigate()

    function onSeeDetailsClick(task) {

        const query = new URLSearchParams()
        query.set('title',task.title)
        query.set('description',task.description)

        navigate(`/task?${query.toString()}`)
    }


    return (
        <ul className="space-y-4 shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => props.onTaskClick(task.id)} className={`w-full bg-emerald-400 p-2 rounded-md text-amber-50 text-left ${task.isCompleted ? "line-through" : ''}`}>
                        {task.title}

                    </button>
                    <button onClick={
                        () => onSeeDetailsClick(task)
                    } className="bg-emerald-400 p-2 rounded-md text-amber-50 cursor-pointer">
                        <ChevronRightIcon />
                    </button>

                    <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-emerald-400 p-2 rounded-md text-amber-50 cursor-pointer">
                        <TrashIcon />
                    </button>
                </li>
            ))}

        </ul>
    )
}

export default Tasks;