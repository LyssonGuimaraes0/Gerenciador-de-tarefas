import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="w-full p-4 flex flex-col space-y-4">
            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-gray-100" type="text" value={title} placeholder="Digite o nome da tarefa" onChange={(event) => setTitle(event.target.value)} />

            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-gray-100" type="text" onChange={(event) => setDescription(event.target.value)} value={description} placeholder="Digite a descrição da tarefa" />

            <button onClick={() => {

                if(!title.trim() || !description.trim()){
                    alert("Adicione Informações da tarefa")
                    return
                }

                onAddTaskSubmit(title, description)
                setTitle("")
                setDescription("")
                }} className="w-full bg-emerald-400 p-2 rounded-sm text-amber-50 ">Adicionar Tarefa</button>
        </div>
    );
}

export default AddTasks;