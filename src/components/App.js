import { React, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { LoadingBar } from "react-redux-loading-bar";
import { Route, Routes } from "react-router-dom";

import Login from "./login/Login";
import Navigation from "./Navigation";
import Dashboard from "./dashboard/Dashboard";
import LeaderBoard from "./leaderboard/LeaderBoard";
import NewQuestion from "./new_question/NewQuestion";
import Question from "./question/Question";
import PageNotFound from "./PageNotFound";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div>
        { props.loading === true ? (
          <div>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="*" element= {<PageNotFound />} />
            </Routes>
          </div>
        ) : (
          <div>
            <Navigation authedUser={props.authedUser} />
            <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route path="/new" element={<NewQuestion />} />
              <Route path="/question/:id" element={<Question/>} />
              <Route exact path="/" element={<Login />} />
            </Routes>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
    loading: authedUser === null,
  }
};

export default connect(mapStateToProps)(App);
