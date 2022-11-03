import React from 'react';
import edit from '../../assets/images/edit.svg';
import close from '../../assets/images/close.svg';
import confirm from '../../assets/images/confirm.svg';

const Task = ({task, onDeleteTask, index, setCompleted}) => {

  return (
    <li  className={task.isCompleted ? 'tasks__completed' : 'tasks__uncompleted'}>
      <div className='tasks__info'>
        {/*<span className='tasks__index'>{index + 1}.</span>*/}
        <span className='tasks__text'>{task.text}</span>
      </div>
      <div className='tasks__images'>
        <img onClick={() => onDeleteTask(task)} className='tasks__close-svg' src={close} alt="#"/>
        {/*<img className='tasks__edit-svg' src={edit} alt="#"/>*/}
        <img onClick={() => {setCompleted(task.id); console.log(task.isCompleted)}}
             className='tasks__svg' src={confirm} alt="#"/>
      </div>
    </li>
  );
};

export default Task;