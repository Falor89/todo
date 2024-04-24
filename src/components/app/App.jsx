import styles from './app.module.css'

import AppHeader from '../AppHeader/AppHeader';
import TodoContainer from '../TodoContainer/TodoContainer';
import Modal from '../Modal/Modal';


function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.main}>
        <TodoContainer />
      </div>
    </div>
  );
}


export default App;
