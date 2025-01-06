import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/cat.module.scss';

const CatList = () => {
  const [cats, setCats] = useState<{ id: string; url: string }[]>([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((res) => res.json())
      .then((data) => setCats(data));
  }, []);

  return (
    <div className={styles.catList}>
      <h1>Cat List</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <Link to={`/dashboard/cat/${cat.id}`}>
              <img src={cat.url} alt="cat" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
