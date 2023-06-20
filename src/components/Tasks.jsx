import { Trash } from 'phosphor-react'

import styles from '../components/Tasks.module.scss'



export function Tasks() {
    return(
        <div>
            <section>       
                <div className={styles.tasks}>
                    <input type="checkbox" />
                    <label for="task-checkbox">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </label>
                    <button className={styles.trashIcon}><Trash size={18} /></button>
                </div>   
            </section>
        </div>
    );
};

