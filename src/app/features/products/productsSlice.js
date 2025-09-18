import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products from API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", // action name
  async () => {
    const response = await fetch("https://dummyjson.com/products?limit=190");
    const data = await response.json();
    return data.products; // return array of products
  }
);

const productsSlice = createSlice({
  name: "products", // slice name
  initialState: {
    items: [],
    status: "idle",
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload; // update search query
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; // while fetching
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // fetch success
        state.items = action.payload; // store products in state
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed"; // fetch failed
      });
  },
});

export const { setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
