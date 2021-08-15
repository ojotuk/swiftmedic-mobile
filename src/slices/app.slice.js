/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  checked: false,
  loggedIn: false,
  me: {},
  title: 'Swift Medic',
  cart: [],
  preCart: {},
  openCartDialog: false,
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      state.loggedIn = payload.loggedIn
      state.checked = payload.checked
    },
    saveMe: (state, { payload }) => {
      state.me = payload.me
    },
    setTitle: (state, { payload }) => {
      state.title = payload.title
    },
    addToPreCart: (state, { payload }) => {
      ;(state.preCart = payload.item), (state.openCartDialog = true)
    },
    addToCart: (state, { payload }) => {
      ;(state.cart = [payload.item, ...state.cart]),
        (state.openCartDialog = true)
    },
    closeCartDialog: (state, { payload }) => {
      ;(state.openCartDialog = false), (state.preCart = {})
    },
  },
})

export const { action } = appSlice
export const {
  authenticate,
  saveMe,
  setTitle,
  addToPreCart,
  addToCart,
  closeCartDialog,
} = appSlice.actions

export default appSlice.reducer
