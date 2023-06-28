import { Trash } from 'phosphor-react'
import Checkbox from '../assets/Checkbox-layer.svg'
import Checked from '../assets/Checked.svg'
import styles from '../components/Tasks.module.scss'
import { useState } from 'react'



export function Tasks() {

    const [isVisible, setIsVisible] = useState(true);
    const [isTextHighlighted, setIsTextHighlighted] = useState(false)

    
    const StyleMarked = {
        textDecoration: isTextHighlighted ? 'line-through' : 'none',
        opacity: isTextHighlighted ? '50%' : '100%',    
    }
    

    function handleClick() {
        setIsVisible(!isVisible);
        setIsTextHighlighted(!isTextHighlighted)
    
    }

    return(
        <div>
            <section>       
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
                    <label style={StyleMarked}>"Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam . </label>
                    <button className={styles.trashIcon}><Trash size={18} /></button>
                </div>   
            </section>
        </div>
    );
};

