import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {
    name: '',
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterContact(state, action) {
      state.filters.name = action.payload
    },
  },
})

export const { setFilterContact } = filterSlice.actions

export const filterSliceReducer = filterSlice.reducer
