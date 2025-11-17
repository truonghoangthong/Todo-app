import React from 'react';
import './TodoItem.css';
import done_icon from '../../assets/correct.png';
import delete_icon from '../../assets/delete.png';


// Define props interface for TodoItem component
interface TodoItemProps {
    id: number;
    text: string;
    isComplete: boolean;
    deleteTask: (id: number) => void;
    toggleComplete: (id: number) => void;
}
const TodoItem = ({ id ,text, isComplete, deleteTask, toggleComplete }: TodoItemProps) => {
    return (
        <div className='todo-item-container'>
            {/* Task content - click to toggle completion */}
            <div onClick={() => toggleComplete(id)} className='todo-task'>
                {/* Show checkmark if complete, empty circle if not */}
                {isComplete ? (<img src={done_icon} alt="" className="done-icon" />) : (<div className="not-complete"></div>)}
                {/* Task text - strike through if completed */}
                <p className={isComplete ? 'completed' : ''}>{text}</p>
            </div>
        {/* Delete button */}
        <img onClick={() => deleteTask(id)} src={delete_icon} alt="" className="delete-icon" />
        </div>
    );
};

export default TodoItem;