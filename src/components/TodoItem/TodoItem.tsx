import React from 'react';
import './TodoItem.css';
import done_icon from '../../assets/correct.png';
import delete_icon from '../../assets/delete.png';

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
            {/* Todo Item */}
            <div onClick={() => toggleComplete(id)} className='todo-task'>
                {isComplete ? (<img src={done_icon} alt="" className="done-icon" />) : (<div className="not-complete"></div>)}
                <p className={isComplete ? 'completed' : ''}>{text}</p>
            </div>
        <img onClick={() => deleteTask(id)} src={delete_icon} alt="" className="delete-icon" />
        </div>
    );
};

export default TodoItem;