import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
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
		<main className="w-full relative">
			<BrowserRouter>
				{user && notIndex && <Sidebar />}
				<Routes>
					<Route path="/" element={<Home />} />
					{!user && <Route path="/login" element={<Login />} />}
					{!user && <Route path="/register" element={<Register />} />}
					<Route path="/dashboard/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App
