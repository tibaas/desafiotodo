import Clipboard from '../assets/Clipboard.svg'
import styles from '../components/InfoScreen.module.scss'

export function InfoScreen(){
    return(
        <div className={styles.clipboardScreen}>
            <img src={Clipboard} alt="Logo-todo" />
            
                <p1> <strong>Você ainda não tem tarefas cadastradas</strong></p1>
                <p1> Crie tarefas e organize seus itens a fazer</p1>
            
           
        </div>
    )
}