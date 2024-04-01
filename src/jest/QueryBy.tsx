import React from "react";

interface QueryByInterface {
  name: string;
  surname: string;
}

const QueryBy: React.FC<QueryByInterface> = (data) => {
  const login = true;
  return (
    <div>
      {login ? (
        <button type="button">Logout</button>
      ) : (
        <button type="button">Login</button>
      )}
      <h1>{data.name}</h1><h1>{data.surname}</h1>
    </div>
  );
};

export default QueryBy;
