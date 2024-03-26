import React from "react";
import "./App.css";
// eslint-disable-next-line import/no-useless-path-segments
import UserDetail from "../src/redux-toolkit-example/UserDetail.tsx"

const App: React.FC = () => (
  <div className="App">
    <UserDetail />
  </div>
);

export default App;
