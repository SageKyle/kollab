import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export function useAuthContext() {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('UseContext must be within a context provider')
	}

	return context
}
