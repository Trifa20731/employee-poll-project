import { React, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { LoadingBar } from "react-redux-loading-bar";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <LoadingBar />
      <div>
        {props.loading === true ? (
          <div>
            <Routes>
              <Route path="/" exact element={<Login />} />
            </Routes>
          </div>
        ) : (
          <div>
            <Navigation />
            <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route path="/new" element={<NewQuestion />} />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
