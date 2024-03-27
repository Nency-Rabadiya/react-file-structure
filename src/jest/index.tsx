import React, { useState } from "react";

const TestExample: React.FC = () => {
  const [data, setData] = useState("");
  const [submit, setSubmit] = useState("");

  return (
    <div className="App">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={data}
          id="username"
          name="username"
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter Username"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
        <button type="submit" onClick={() => setSubmit("successful")}>
          Submit
        </button>
        <h1>{submit}</h1>
      </form>
    </div>
  );
};

export default TestExample;
