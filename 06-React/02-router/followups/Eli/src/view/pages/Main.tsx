import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <p>THIS IS THE MAIN!!!! PAGE!</p>
        <Link to="/">
          <button>Goto Home</button>
        </Link>
    </div>
  );
};

export default Main;
