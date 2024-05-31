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

// Get users
export const getUsers = createAsyncThunk(
  "getUsers",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${BaseUrl}`);
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Delete User

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${BaseUrl}/${id}`, { method: "DELETE" });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// Update user
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${BaseUrl}/${data.id}`, {
      method: "PUT",
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

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.users.push(action.payload.message);
    });

    // getUsers
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });

    // DeleteUsers
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      // console.log("DElete", action.payload)
      const {id} = action.payload;
        if (id) {
          state.users=state.users.filter((ele) => ele.id !== id)
        }
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });


    // update user

    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.map((ele) => (
        ele.id === action.payload.id ? action.payload : ele
      ))
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.users.push(action.payload.message);
    });
  },
});

export default userDetail.reducer;
