import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
}
const contactSlice = createSlice({
  // Ім'я слайсу
  name: 'contact', // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload)
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
  },
})

export const { addContact, deleteContact } = contactSlice.actions
export const contactSliceReducer = contactSlice.reducer
