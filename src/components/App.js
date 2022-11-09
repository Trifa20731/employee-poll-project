import { React, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { LoadingBar } from "react-redux-loading-bar";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

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

  const RequireAuth = ({ children }) => {
    const location = useLocation();
    return props.authedUser === null ? (
      <Navigate to="/" replace state={{ path: location.pathname }} />
    ) : (
      children
    );
  };

  return (
    <Fragment>
      <LoadingBar />
      <div>
        <Navigation authedUser={props.authedUser} />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <RequireAuth>
                <LeaderBoard />
              </RequireAuth>
            }
          />
          <Route
            path="/add"
            element={
              <RequireAuth>
                <NewQuestion />
              </RequireAuth>
            }
          />
          <Route
            path="/questions/:id"
            element={
              <RequireAuth>
                <Question />
              </RequireAuth>
            }
          />
          <Route
            path="*"
            element={
              <RequireAuth>
                <PageNotFound />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
