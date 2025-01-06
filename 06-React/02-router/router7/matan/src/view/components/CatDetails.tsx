import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Cat {
  id: string;
  url: string;
}

const CatDetails = () => {
  const { id } = useParams();
  const [cat, setCat] = useState<Cat | null>(null);

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/${id}`)
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, [id]);

  if (!cat) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Cat Details</h1>
      <img src={cat.url} alt="cat" width="400" />
      <p>Name Img: {cat.id}</p>
    </div>
  );
};

export default CatDetails;
