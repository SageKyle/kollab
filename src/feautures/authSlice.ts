import { createSlice } from '@reduxjs/toolkit'

type authType = {
	user: Record<string, never> | UserType
}

const initialState: authType = {
	user: {},
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
		},
		clearUserData: (state) => {
			state.user = {}
		},
	},
})

export const { setUser, clearUserData } = authSlice.actions
export const authReducer = authSlice.reducer
export default authSlice
