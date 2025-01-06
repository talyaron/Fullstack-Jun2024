import { Link } from 'react-router-dom';
import styles from '../styles/sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Menu</h2>
      <nav>
        <Link to="/dashboard/cats">Cats</Link>
        <Link to="/dashboard/dogs">Dogs</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
