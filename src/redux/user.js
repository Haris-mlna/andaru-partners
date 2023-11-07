import { createSlice } from "@reduxjs/toolkit";

const userInitial = {
  name : '',
  password : '',
  email : '',
  phone : '',
  address : '',
  avatar_user : '',
  cover_user : '',
  role : '',
}

const userSlice = createSlice({
  name: "user",
  initialState: { value: userInitial },
  reducers : {
    login : (state, action) => {
        state.value = action.payload;
    }
  }
});

export const {login} = userSlice.actions

export default userSlice.reducer;