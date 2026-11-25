import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  //States de task
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function onAddTaskSubmit(title, description){
    const newTask = {
      id : tasks.length + 1,
      title : title,
      description : description
    }

    setTask([...tasks, newTask])
  }

  //Função que verifica o click e ver se task precisa ser atualizada
  function onTaskClick(id) {
      
    //Caso id corresponda, retorna lista de antiga com item correspondente alterado.
    const newTask = tasks.map(task =>{
        if (task.id === id) {
          return {...task, isCompleted : !task.isCompleted}
        }

        //Caso contrario, não atualiza
        return task
      })

      setTask(newTask)
  }

  function onDeleteTaskClick(id) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTask(newTasks)
  }

  return (
    <div className="w-screen h-screen bg-sky-300 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="bg-gray-700 p-6 rounded-sm">
          <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
          <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        </div>
        <div className="bg-gray-700  p-6 rounded-sm">
          <Tasks tasks={tasks} onDeleteTaskClick={onDeleteTaskClick}  onTaskClick={onTaskClick} />
        </div>
      </div>
    </div>
  );
}

export default App;