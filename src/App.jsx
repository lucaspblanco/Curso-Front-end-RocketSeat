import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css';

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post 
            author="Dennis" 
            content="tetststt">
         </Post>
         <Post 
            author="ABC" 
            content="87676">
        </Post>
        </main>
        </div> 
    
    </>
  )
}

export default App
