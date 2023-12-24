import { Navigate, Outlet } from 'react-router-dom'

interface iProp {
	user: UserType | null
}

export default function ProtectedRoute({ user }: iProp) {
	// if (user?.isAnonymous) return <Outlet />;

	return user ? <Outlet /> : <Navigate to="/login" />
}
