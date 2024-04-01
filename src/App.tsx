import React from "react";
import TestExample from "./jest/index.tsx";
import QueryBy from "./jest/QueryBy.tsx";
import ProductProfile from "./jest/ProductProfile.tsx";

const App: React.FC = () => (
  <div className="App">
    <TestExample />
    <QueryBy name="xyz" surname="abcd" />
    <ProductProfile productId={1}/>
  </div>
);

export default App;