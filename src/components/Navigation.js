import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../actions/shared";
import "../css/Navigation.css";

const Navigation = (props) => {
  const handleLogOut = () => {
    props.dispatch(handleSetAuthedUser(null));
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home" data-testid="home-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" data-testid="leaderboard-link">
            Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/new" data-testid='new-link'>New</Link>
        </li>
        <li className="logOutItemLi">
          <Link to="/" onClick={() => handleLogOut()} data-testid='logout-link'>
            Log Out
          </Link>
        </li>
        <li className="authedUserItemLi">{props.authedUser.name}</li>
        <li className="authedUserIconLi">
          <img
            className="authedUserIcon"
            src={props.authedUser.avatarURL}
            alt="authedUser icon"
          />
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(Navigation);
