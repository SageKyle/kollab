import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/dashboard/profile'

function App() {
	const [user] = useState(true)
	const location = window.location
	const notIndex = location.pathname !== '/'

	return (
		<main className="w-full bg-slate-50 relative min-h-screen">
			<BrowserRouter>
				{user && notIndex && <Navbar />}
				<div className="w-full lg:gap-4 lg:flex relative">
					{user && notIndex && <Sidebar />}
					<Routes>
						<Route path="/" element={<Home />} />
						{!user && <Route path="/login" element={<Login />} />}
						{!user && <Route path="/register" element={<Register />} />}
						<Route path="/dashboard/profile" element={<Profile />} />
					</Routes>
				</div>
			</BrowserRouter>
		</main>
	)
}

export default App
