import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar () { 
return (
    <aside className= {styles.sidebar}>
        <img 
        className= {styles.cover} 
        src="https://images.unsplash.com/photo-1668554245893-2430d0077217?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="" />

        <div className={styles.profile}>
            <Avatar src="https://github.com/maykbrito.png"/>
            
            <strong>Lucas Pedrosa</strong>
            <span>Web Developer</span>
            
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </div>
    </aside>

);
}