import React from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Globe, Users, FileText, Settings } from 'lucide-react'

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Welcome to Telepath Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Profile"
          icon={<User className="h-8 w-8" />}
          link="/admin/profile"
        />
        <DashboardCard
          title="Email Templates"
          icon={<Mail className="h-8 w-8" />}
          link="/admin/email-templates"
        />
        <DashboardCard
          title="Translation Master"
          icon={<Globe className="h-8 w-8" />}
          link="/admin/translation-master"
        />
        <DashboardCard
          title="Home Page Settings"
          icon={<Settings className="h-8 w-8" />}
          link="/admin/home-page-settings"
        />
        <DashboardCard
          title="Our Team Master"
          icon={<Users className="h-8 w-8" />}
          link="/admin/our-team-master"
        />
        <DashboardCard
          title="CMS Master"
          icon={<FileText className="h-8 w-8" />}
          link="/admin/cms-master"
        />
      </div>
    </div>
  )
}

const DashboardCard: React.FC<{ title: string; icon: React.ReactNode; link: string }> = ({ title, icon, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-4">{title}</h2>
      </div>
      <p className="text-gray-600">Manage {title.toLowerCase()}</p>
    </Link>
  )
}

export default AdminDashboard