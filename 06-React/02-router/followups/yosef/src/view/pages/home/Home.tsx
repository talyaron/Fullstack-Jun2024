import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to My React App!</h1>
            <Link to="/main">Main</Link>
        </div>
    )
}

export default Home;