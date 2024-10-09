import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Home, User, Mail, Globe, Users, FileText, Settings, LogOut } from 'lucide-react'

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Telepath Admin</h2>
        </div>
        <nav className="mt-4">
          <Link to="/admin/dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <Home className="inline-block mr-2" /> Dashboard
          </Link>
          <Link to="/admin/profile" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <User className="inline-block mr-2" /> Profile
          </Link>
          <Link to="/admin/email-templates" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <Mail className="inline-block mr-2" /> Email Templates
          </Link>
          <Link to="/admin/translation-master" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <Globe className="inline-block mr-2" /> Translation Master
          </Link>
          <Link to="/admin/home-page-settings" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <Settings className="inline-block mr-2" /> Home Page Settings
          </Link>
          <Link to="/admin/our-team-master" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <Users className="inline-block mr-2" /> Our Team Master
          </Link>
          <Link to="/admin/cms-master" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <FileText className="inline-block mr-2" /> CMS Master
          </Link>
          <Link to="/admin/logout" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <LogOut className="inline-block mr-2" /> Logout
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout