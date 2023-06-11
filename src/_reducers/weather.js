import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {},
  reducers: {
    onAddData:  (state, action) => {
        state.data = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { onAddData } = weatherSlice.actions

export default weatherSlice.reducer