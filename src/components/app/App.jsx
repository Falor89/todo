import styles from './app.module.css'

import AppHeader from '../AppHeader/AppHeader';
import Modal from '../Modal/Modal';
import { loadingTodos, loadTodos } from '../../services/actions/todos';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [dispatch])

  return (
    <div className={styles.app}>
      <AppHeader />
    </div>
  );
}


export default App;
