import { Link } from "react-router-dom";
import '../css/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link class="active" to="/">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;