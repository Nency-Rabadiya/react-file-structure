import React from "react";
import TestExample from "./jest/index.tsx";
import QueryBy from "./jest/QueryBy.tsx";

const App: React.FC = () => (
  <div className="App">
    <TestExample />
    <QueryBy name="xyz" surname="abcd" />
  </div>
);

export default App;