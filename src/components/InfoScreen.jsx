import Clipboard from '../assets/Clipboard.svg'
import styles from '../components/InfoScreen.module.scss'

export function InfoScreen(){
    return(
        <div className={styles.clipboardScreen}>
            <img src={Clipboard} alt="Logo-todo" />           
                <span> <strong>Você ainda não tem tarefas cadastradas</strong></span>
                <span> Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}