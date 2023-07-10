import React from 'react'
import { useState } from 'react'
import { Tasks } from './components/Tasks'
import { InfoScreen } from './components/InfoScreen'
import { PlusCircle } from 'phosphor-react'
import todoLogo from './assets/Logo-todo.svg'
import styles from './Container.module.scss'
import './global.css'

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const noTasksCreated = tasks.length === 0;
  const handleChange = (e) => {
      setNewTask(e.target.value)
  }
  function createTask() {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setTaskCount(taskCount + 1)
      setNewTask('')   
    }  
  }
  function markTaskAsCompleted(index) {
    const updatedTasks = [...tasks];
    if (updatedTasks[index]?.completed) {
      updatedTasks[index].completed = false;
      setCompletedTasksCount(completedTasksCount - 1);
    } else if (updatedTasks[index]) {
      updatedTasks[index].completed = true;
      setCompletedTasksCount(completedTasksCount + 1);
    }
    setTasks(updatedTasks);
  }
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    const taskToDelete = updatedTasks[index];
    if (taskToDelete) {
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
      setTaskCount(taskCount - 1);
      if (taskToDelete.completed) {
        setCompletedTasksCount(completedTasksCount - 1);
      }
    }
  }

  return (
    <section>
      <div className={styles.container}>
          <header className={styles.header}>
            <img src={todoLogo} alt="Logo-todo" />
          </header>
        <div className={styles.inputBarContainer}>   
          <input 
            value={newTask}
            className={styles.inputBar}  
            onChange={handleChange}
            type="text" 
            placeholder='Adicione uma nova tarefa'
          />       
          <button
            className={styles.inputButton} 
            type="submit"
            onClick={createTask}
          >  <strong>Criar</strong> <PlusCircle size={18} />  </button>
        </div>
            <div className={styles.spanContainer}>
              <p>Tarefas criadas<span>{taskCount}</span></p> 
              <p>
                Concluídas<span>{`${completedTasksCount} de ${taskCount}`}</span>
              </p>
              <div className={styles.separatorSpan}></div>             
                <div className={styles.feedTask}>
                {noTasksCreated && <InfoScreen />} 
                  {tasks.map((task, index) => (
                    <Tasks
                      key={index}
                      task={task.task}
                      completed={task.completed}
                      onMarkAsCompleted={() => markTaskAsCompleted(index)}
                      onDeleteTask={() => deleteTask(index)}
                    />
                  ))}
                </div>
              
            </div>       
      </div>       
    </section>
    
  )
}

export default App

