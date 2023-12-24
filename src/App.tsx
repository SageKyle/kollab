import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Requests from './pages/dashboard/Requests'
import Dashboard from './pages/dashboard/home'
import Profile from './pages/dashboard/profile'
import FallbackRoute from './utils/routes/FallbackRoute'
import LoginRoute from './utils/routes/LoginRoute'
import ProtectedRoute from './utils/routes/ProtectedRoute'

function App() {
	const { user } = useAuthContext()
	const location = window.location
	const notIndex = location.pathname !== '/'

	return (
		<main className="w-full bg-slate-50 relative min-h-screen">
			<BrowserRouter>
				{user && notIndex && <Navbar />}
				<div
					className={`w-full lg:gap-4 lg:flex relative ${
						notIndex ? 'flex-row' : 'flex-col'
					}`}
				>
					{user && notIndex && <Sidebar />}
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/login" element={<LoginRoute user={user} />}>
							<Route path="/login" element={<Login />} />
						</Route>

						<Route path="/register" element={<LoginRoute user={user} />}>
							{<Route path="/register" element={<Register />} />}
						</Route>
						<Route
							path="/dashboard/home"
							element={<ProtectedRoute user={user} />}
						>
							<Route path="/dashboard/home" element={<Dashboard />} />
						</Route>

						<Route
							path="/dashboard/profile"
							element={<ProtectedRoute user={user} />}
						>
							<Route path="/dashboard/profile" element={<Profile />} />
						</Route>
						<Route
							path="/dashboard/requests"
							element={<ProtectedRoute user={user} />}
						>
							<Route path="/dashboard/requests" element={<Requests />} />
						</Route>

						<Route path="*" element={<FallbackRoute />} />
					</Routes>
				</div>
			</BrowserRouter>
		</main>
	)
}

export default App
