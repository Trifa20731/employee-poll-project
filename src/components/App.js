import { React, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Poll from "./Poll";
import { LoadingBar } from "react-redux-loading-bar";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <LoadingBar/>
      {props.loading === true ? null : <Poll />}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
