/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState} from "react"

const SnapshotExample :React.FC = () => {
    const [data, setData] = useState("");
    return (
      <div>
        <h1>{data}</h1>
        <button type="button" onClick={() => setData("Updated")}>
          Click here
        </button>
      </div>
    );
};

export default SnapshotExample;