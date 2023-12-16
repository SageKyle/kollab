import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './feautures/authSlice'

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
})

export default store
