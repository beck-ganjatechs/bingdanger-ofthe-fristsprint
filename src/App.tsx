import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import AdminLayout from './components/admin/AdminLayout'
import AdminLogin from './components/admin/AdminLogin'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminProfile from './components/admin/AdminProfile'
import ForgotPassword from './components/admin/ForgotPassword'
import ChangePassword from './components/admin/ChangePassword'
import EmailTemplates from './components/admin/EmailTemplates'
import TranslationMaster from './components/admin/TranslationMaster'
import HomePageSettings from './components/admin/HomePageSettings'
import OurTeamMaster from './components/admin/OurTeamMaster'
import CMSMaster from './components/admin/CMSMaster'
import ProtectedRoute from './components/admin/ProtectedRoute'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="email-templates" element={<EmailTemplates />} />
            <Route path="translation-master" element={<TranslationMaster />} />
            <Route path="home-page-settings" element={<HomePageSettings />} />
            <Route path="our-team-master" element={<OurTeamMaster />} />
            <Route path="cms-master" element={<CMSMaster />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App