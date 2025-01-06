import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/dog.module.scss';

const DogDetails = () => {
  const { id } = useParams();
  interface Dog {
    id: string;
    url: string;
  }

  const [dog, setDog] = useState<Dog | null>(null);

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/images/${id}`)
      .then((res) => res.json())
      .then((data) => setDog(data));
  }, [id]);

  if (!dog) return <h2>Loading...</h2>;

  return (
    <div className={styles.dogDetails}>
      <h1>Dog Details</h1>
      <img src={dog.url} alt="dog" />
      <p>Name Img: {dog.id}</p>
    </div>
  );
};

export default DogDetails;
