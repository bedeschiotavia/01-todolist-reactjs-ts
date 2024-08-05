import styles from './App.module.css';
import { Header } from './components/Header';

import './global.css';

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <h1>Teste</h1>
      </div>
    </>
  )
}

export default App
