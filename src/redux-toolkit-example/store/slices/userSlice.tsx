import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  // Define the properties of a user
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    // removeUser(state,action){},
    // clearAllUser(state,action){},
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;