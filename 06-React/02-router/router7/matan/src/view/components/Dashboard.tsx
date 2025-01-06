import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from '../styles/dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;