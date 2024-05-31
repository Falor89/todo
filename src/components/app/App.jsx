import styles from './app.module.css'

import AppHeader from '../AppHeader/AppHeader';
import Modal from '../Modal/Modal';
import { routes } from '../../utils/routes';

import { Routes, Route } from 'react-router';
import { HomePage } from '../../pages/home';
import { LoginPage } from '../../pages/login';
import { MyListPage } from '../../pages/myList'
import { ProtectedRoute } from '../Protected/Protected';
import { AppFooter } from '../AppFooter/AppFooter';


function App() {

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes >
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.myList} element={<ProtectedRoute element={<MyListPage />} />} />
        <Route path={routes.login} element={<LoginPage />} />
      </Routes>
      <AppFooter />
    </div>
  );
}


export default App;
