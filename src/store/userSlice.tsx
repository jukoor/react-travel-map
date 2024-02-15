import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types/UserType";

export type UserState = {
  selectedUser: UserType;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedUser: {
      uid: "",
      nameFirst: "",
      nameLast: "",
      bio: "",
      bioTags: [],
      bucketList: [],
      homeTown: "",
      nationality: "",
      countriesVisited: [],
    },
  } as UserState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = {
        ...state.selectedUser,
        ...action.payload,
      };
    },
    addCountryVisited: (state, action) => {
      console.log(action);
      const countryToAdd = action.payload;
      state.selectedUser.countriesVisited = [
        ...state.selectedUser.countriesVisited,
        ...countryToAdd,
      ];
    },
  },
});

export const { setSelectedUser, addCountryVisited } = userSlice.actions;

export default userSlice.reducer;
