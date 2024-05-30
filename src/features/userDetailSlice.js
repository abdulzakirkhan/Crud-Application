import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// create user
const BaseUrl = "https://6658263b5c361705264715ad.mockapi.io/crud";
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${BaseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    try {
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
      
    builder.addCase(createUser.fulfilled, (state,action) => {
        state.loading = false;
        state.users.push(action.payload)
    });
    builder.addCase(createUser.rejected, (state,action) => {
        state.loading = false;
        state.users.push(action.payload.message)
    });
  },
});

export default userDetail.reducer;
