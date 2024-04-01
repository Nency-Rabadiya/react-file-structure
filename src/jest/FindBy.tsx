import React, { useEffect, useState } from "react";

const FindBy: React.FC = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1000);
  });

  return <div>{data ? <h2>Data found</h2> : <h2>Data not found</h2>}</div>;
};

export default FindBy;
