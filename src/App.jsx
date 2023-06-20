
import todoLogo from './assets/Logo-todo.svg'
import styles from './Container.module.scss'

import { PlusCircle } from 'phosphor-react'

import './global.css'
import { Tasks } from './components/Tasks'
import { InfoScreen } from './components/InfoScreen'

function App() {
  const showingTask = <Tasks />

  
  
 

  return (
    <section>
      <div className={styles.container}>
          <header className={styles.header}>
            <img src={todoLogo} alt="Logo-todo" />
          </header>
        <div className={styles.inputBarContainer}>
          <input 
            className={styles.inputBar}
            type="text" 
            placeholder='Adicione uma nova tarefa'
          /> 
          
          <button
            className={styles.inputButton} 
            type="submit"
          >  <strong>Criar</strong> <PlusCircle size={18} />  </button>
        </div>
            <div className={styles.spanContainer}>
              <p>Tarefas criadas<span>0</span></p> 
              <p>Concluídas<span>0</span></p>  

              <div className={styles.separatorSpan}></div>

              <div className={styles.feedTask}>
              
              <Tasks />
              <Tasks />
              <Tasks />
                
               
                
              {/* <InfoScreen /> */}
                
              </div> 
                    
            </div>
             
          

            
      </div> 
       
      
    </section>
    
  )
}

export default App
