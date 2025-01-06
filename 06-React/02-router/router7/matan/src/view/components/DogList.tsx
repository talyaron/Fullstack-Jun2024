import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/dog.module.scss';

const DogList = () => {
  interface Dog {
    id: string;
    url: string;
  }

  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search?limit=10')
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);

  return (
    <div className={styles.dogList}>
      <h1>Dog List</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <Link to={`/dashboard/dog/${dog.id}`}>
              <img src={dog.url} alt="dog" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;