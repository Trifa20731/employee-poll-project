import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../actions/shared";
import '../css/Navigation.css'

const Navigation = (props) => {

  const handleLogOut = () => {
    props.dispatch(handleSetAuthedUser(null));
  }

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
          <Link className="active" to="/" onClick={() =>handleLogOut()}>Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(Navigation);