import './App.css';
import React from "react";
import { v4 as uuidv4} from 'uuid';
import Task from "./components/task/task";

function App() {
  const [value, setValue] = React.useState('')
  const [tasks, setTasks] = React.useState([])
  const onAddTask = (value) => {
    const newTask = {id: uuidv4(), text: value, isCompleted: false}
    setTasks([...tasks, newTask])
    setValue('')
  }
  const onDeleteTask = (task) => {
    const newTasks = [...tasks.filter((e) => e.id !== task.id)]
    setTasks(newTasks);
  }
  const setCompleted = (id) => {
    setTasks(tasks.map((todo) => {
      if (todo.id === id) return {...todo, isCompleted: !todo.isCompleted}
      else return todo;
    }))
  }
  return (
    <div className='todo'>
      <div className='container'>
        <div className='todo__inner'>
          <h1 className='todo__title'>Todo app</h1>
          <div className='main'>
            <input value={value} onChange={(e) => setValue(e.target.value)} className='main__input' type="text"/>
            <button className='main__button' onClick={() => onAddTask(value)}>Create task</button>
          </div>
          <div className='tasks'>
            <h2 className='tasks__title'>Tasks:</h2>
            <ul className='tasks__list'>
              {tasks.map((task, index) => {
                return <Task setCompleted={setCompleted} task={task} index={index} key={index} onDeleteTask={onDeleteTask}/>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
