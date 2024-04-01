import React, { useState } from "react";

const MultipleElement: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div role="loginDiv">Login Page</div>
      <label htmlFor="first-name">Username</label>
      <input
        type="text"
        id="first-name"
        name="firstname"
        placeholder="Enter Username"
        defaultValue="ABC"
      />

      <label htmlFor="last-name">Lastname</label>
      <input
        type="text"
        id="last-name"
        name="lastname"
        placeholder="Enter Lastname"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter Password"
        element-id="password"
        data-testid="password"
      />

      {/* getByRole */}
      <button type="button">Ok</button>
      <button type="button">Reset</button>

      {/* getAllByRole */}
      <button type="button">click</button>
      <button type="button">click</button>
      <button type="button">click</button>

      {/* getByDisplayValue */}
      <textarea defaultValue={"nency"} />

      {/* userEvent keyboard interaction */}
      <h1>{value}</h1>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
export default MultipleElement;
