import {
	Dispatch,
	ReactElement,
	createContext,
	useEffect,
	useReducer,
} from 'react'
import { projectAuth } from '../firebase/firebase.config'

type authType = {
	authIsReady: boolean
	user: UserType | null
	dispatch: Dispatch<authType>
}

type iProp = {
	children: ReactElement
}

type dispatchType = {
	type: 'LOGIN' | 'SIGNUP' | 'LOGOUT' | 'AUTH_READY'
	payload?: UserType | null
}

const initialValue: authType = {
	authIsReady: false,
	user: null,
	dispatch: () => {},
}

export const AuthContext = createContext(initialValue)

export const authReducer = (
	state: authType,
	action: Dispatch<authType, dispatchType>
) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.payload,
			}
		case 'SIGNUP':
			return {
				...state,
				user: action.payload,
			}
		case 'AUTH_READY':
			return {
				...state,
				user: action.payload,
			}
		case 'LOGOUT':
			return {
				...state,
				user: null,
			}
		default:
			return state
	}
}

export function AuthContextProvider({ children }: iProp) {
	const [state, dispatch] = useReducer(authReducer, initialValue)

	useEffect(() => {
		const unsub = projectAuth.onAuthStateChanged(async (user) => {
			if (user) {
				dispatch({ type: 'AUTH_READY', payload: user })
			} else {
				dispatch({ type: 'LOGOUT' })
			}

			unsub()
		})
	}, [])

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	)
}
