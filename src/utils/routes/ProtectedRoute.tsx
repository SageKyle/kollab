import { Navigate, Outlet } from 'react-router-dom'

interface iProp {
	user: boolean
}

export default function ProtectedRoute({ user }: iProp) {
	// if (user?.isAnonymous) return <Outlet />;

	return user ? <Outlet /> : <Navigate to="/login" />
}
