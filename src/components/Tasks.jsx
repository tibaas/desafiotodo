import { useState } from 'react'
import { Trash } from 'phosphor-react'
import Checkbox from '../assets/Checkbox-layer.svg'
import Checked from '../assets/Checked.svg'
import styles from '../components/Tasks.module.scss'


export function Tasks({task, completed, onMarkAsCompleted}) {

    const [isVisible, setIsVisible] = useState(true);
    const [isTextHighlighted, setIsTextHighlighted] = useState(completed)
    const StyleMarked = {
        textDecoration: isTextHighlighted ? 'line-through' : 'none',
        opacity: isTextHighlighted ? '50%' : '100%',          
    }
    
    function handleClick() {
        setIsVisible(!isVisible)
        setIsTextHighlighted(!isTextHighlighted)
        onMarkAsCompleted(!isTextHighlighted)   
    }
    return(
        <div>
            <section className={styles.sectionSize}>       
                <div className={styles.tasks}>
                    <div className={styles.imgDiv}>
                        <img 
                            className={styles.checkBox} 
                            src={Checkbox} 
                            onClick={handleClick}
                            alt="Checkbox-Layer" 
                        />
                        <img 
                            className={styles.checkedBox} 
                            src={Checked} 
                            alt="Checked-box" 
                            style={{
                                display: isVisible ? 'none' : 'block'
                            }}
                            onClick={handleClick}                         
                        />
                    </div>
                    <input type="checkbox" />
                    <label style={StyleMarked}>{task}</label>
                    <button className={styles.trashIcon}><Trash size={18} /></button>
                </div>   
            </section>
        </div>
    );
};

