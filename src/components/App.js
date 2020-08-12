import React, { useState } from "react";
import { connect } from "react-redux";

import { TEXT_ACTION } from "../store/app/types";

const App = ({ value, change }) => {
  const handleClick = () => {
    change(!value);
  };
  return (
    <div>
      <div>Hello world!</div>
      <span>current value: {String(value)}</span>
      <button type="button" onClick={handleClick}>
        change
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.app.value,
});

const mapDispatcToProps = (dispatch) => ({
  change: (payload) => dispatch({ type: TEXT_ACTION, payload }),
});

export default connect(mapStateToProps, mapDispatcToProps)(App);
