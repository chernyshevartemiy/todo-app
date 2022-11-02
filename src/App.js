import './App.css';
import React from "react";
import edit from './assets/images/edit.svg';
import close from './assets/images/close.svg';
import confirm from './assets/images/confirm.svg';
import { v4 as uuidv4} from 'uuid';

function App() {
  const [value, setValue] = React.useState('')
  const [tasks, setTasks] = React.useState([])
  const onAddTask = (value) => {
    const newTask = {id: uuidv4(), text: value}
    setTasks([...tasks, newTask])
    setValue('')
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
                return <li className='task'>
                  <div className='task__text'>{index + 1}. {task.text}</div>
                  <div className='tasks__images'>
                    <img className='task__close-svg' src={close} alt="#"/>
                    <img className='task__edit-svg' src={edit} alt="#"/>
                    <img className='task__confirm-svg' src={confirm} alt="#"/>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
