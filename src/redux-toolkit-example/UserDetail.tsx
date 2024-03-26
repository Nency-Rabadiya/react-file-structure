/* eslint-disable react/no-array-index-key */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/slices/userSlice.tsx";
import DeleteAllUser from "./DeleteAllUser.tsx";
import userName from "./username-generate/userName.ts";
import { AppState } from "./store/index.tsx";

const UserDetail: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.users.users);
  console.log("data", data);

  const addNewUser = (name: string): void => {
    dispatch(addUser(name));
    console.log(addUser(name));
  };

  return (
    <div className="App">
      <h1>List of users</h1>
      <button
        type="button"
        className="border"
        onClick={() => addNewUser(userName())}
      >
        Add user
      </button>
      {/* <ul>{data?.map((user: string, i: number) => <li key={i}>{user}</li>)}</ul> */}
      <DeleteAllUser />
    </div>
  );
};

export default UserDetail;
