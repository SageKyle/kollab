import { Navigate, Outlet } from 'react-router-dom'

interface iProp {
	user: UserType | null
}

export default function LoginRoute({ user }: iProp) {
	// if (user?.isAnonymous) return <Outlet />;

	return !user ? <Outlet /> : <Navigate to="/dashboard/home" />
}
