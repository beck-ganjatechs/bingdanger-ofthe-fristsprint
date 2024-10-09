import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = localStorage.getItem('adminLoggedIn') === 'true'

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />
}

export default ProtectedRoute