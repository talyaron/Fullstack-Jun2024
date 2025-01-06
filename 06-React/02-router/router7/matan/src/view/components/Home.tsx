import { Link } from 'react-router-dom';
import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to Pet Catalog</h1>
      <Link to="/dashboard">
        <button className={styles.button}>Go to Catalog</button>
      </Link>
    </div>
  );
};

export default Home;