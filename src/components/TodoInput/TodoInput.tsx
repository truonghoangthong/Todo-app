import React, { useRef,useState, useEffect } from 'react'
import './TodoInput.css'
import todo_icon from '../../assets/schedule.png'
import TodoItem from '../TodoItem/TodoItem'

interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}
const TodoInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);;
    const [tasks, setTasks] = useState<Task[]>((localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : []));
    const add = () => {
        const inputText = inputRef.current!.value.trim();
        if (!inputText) {
            return null;
        }
        const newTode = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }
        setTasks((prevTasks) => [...prevTasks, newTode]);
        inputRef.current!.value = '';
    };

    const deleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const toggleComplete = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isComplete: !task.isComplete };
                }
                return task;  
            })
        );
    };
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div className='todo-input-container'>
            {/* Todo Title Section */}
            <div className="todo-title">
                <img className="todo-image" alt="" src={todo_icon} />
                <h1 className="todo-list">ToDo List Here</h1>
            </div>
            {/* Todo Input Section */}
            <div className="todo-input">
                <input ref={inputRef} className="input-text" type="text" placeholder="Add a new task" />
                <button onClick={add} className="submit-task">ADD</button>
            </div>
            {/* Task List Section */}
            <div className="task-list">
                {tasks.map((task,index) => (
                    <TodoItem key={index} id={task.id} text={task.text} isComplete={task.isComplete} deleteTask={deleteTask} toggleComplete={toggleComplete} />
                ))}
            </div>
        </div>
    );
};

export default TodoInput;