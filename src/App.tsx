import styles from './App.module.css';
import { Button } from './components/Button';
import { Header } from './components/Header';

import { PlusCircle } from '@phosphor-icons/react'

import './global.css';

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <h1>Teste</h1>
        <Button> 
          New task
          <PlusCircle size={20} color="#f2f2f2" weight="bold" />
        </Button>
      </div>
    </>
  )
}

export default App
