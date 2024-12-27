import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>THIS IS THE HOME PAGE!</p>
      <Link to="/main">
        <button>Goto Main</button>
      </Link>
    </div>
  );
};

export default Home;
