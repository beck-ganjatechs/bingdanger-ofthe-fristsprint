import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Lock } from 'lucide-react'

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual login logic
    console.log('Login attempt with:', { email, password })
    // Mock successful login
    localStorage.setItem('adminLoggedIn', 'true')
    navigate('/admin/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to Telepath Admin</h3>
        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <User className="h-5 w-5 text-gray-400" />
              <input
                className="pl-2 outline-none border-none"
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <Lock className="h-5 w-5 text-gray-400" />
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">
              Login
            </button>
            <a href="/admin/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin