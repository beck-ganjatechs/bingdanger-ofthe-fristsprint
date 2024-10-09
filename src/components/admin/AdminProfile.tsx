import React, { useState } from 'react'
import { User, Phone, Mail, Edit2 } from 'lucide-react'

const AdminProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    mobileNumber: '+1234567890',
    userName: 'johndoe',
    emailId: 'john.doe@example.com'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update profile
    console.log('Updated profile:', profile)
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Admin Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              <User className="inline mr-2" />
              Full Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isEditing ? '' : 'bg-gray-100'}`}
              id="fullName"
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              <Phone className="inline mr-2" />
              Mobile Number
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isEditing ? '' : 'bg-gray-100'}`}
              id="mobileNumber"
              type="tel"
              name="mobileNumber"
              value={profile.mobileNumber}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
              <User className="inline mr-2" />
              User Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isEditing ? '' : 'bg-gray-100'}`}
              id="userName"
              type="text"
              name="userName"
              value={profile.userName}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailId">
              <Mail className="inline mr-2" />
              Email ID
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isEditing ? '' : 'bg-gray-100'}`}
              id="emailId"
              type="email"
              name="emailId"
              value={profile.emailId}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="flex items-center justify-between">
            {isEditing ? (
              <>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Save Changes
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => setIsEditing(true)}
              >
                <Edit2 className="inline mr-2" />
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminProfile
</boltArtifact>

I've implemented the AdminProfile component with the following features:

1. Display admin profile information (Full name, Mobile number, User name, Email id)
2. Edit functionality to update profile details
3. Responsive design using Tailwind CSS
4. Form validation (basic)

Next, let's implement the ForgotPassword component:

<boltArtifact id="forgot-password" title="Forgot Password Component">
<boltAction type="file" filePath="src/components/admin/ForgotPassword.tsx">
import React, { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [step, setStep] = useState(1)

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to send OTP
    console.log('Sending OTP to:', email)
    setStep(2)
  }

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to verify OTP
    console.log('Verifying OTP:', otp)
    setStep(3)
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    // TODO: Implement API call to reset password
    console.log('Resetting password')
    // Redirect to login page or show success message
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Forgot Password</h3>
        {step === 1 && (
          <form onSubmit={handleSendOTP}>
            <div className="mt-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <Mail className="h-5 w-5 text-gray-400" />
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
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                type="submit"
              >
                Send OTP
              </button>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleVerifyOTP}>
            <div className="mt-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <ArrowRight className="h-5 w-5 text-gray-400" />
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                type="submit"
              >
                Verify OTP
              </button>
            </div>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handleResetPassword}>
            <div className="mt-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className="pl-2 outline-none border-none"
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <input
                  className="pl-2 outline-none border-none"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                type="submit"
              >
                Reset Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
</boltArtifact>

I've implemented the ForgotPassword component with the following features:

1. Three-step process: Enter email, Verify OTP, Set new password
2. Basic form validation
3. Responsive design using Tailwind CSS

Now, let's implement the ChangePassword component:

<boltArtifact id="change-password" title="Change Password Component">
<boltAction type="file" filePath="src/components/admin/ChangePassword.tsx">
import React, { useState } from 'react'
import { Lock } from 'lucide-react'

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert("New passwords don't match")
      return
    }
    // TODO: Implement API call to change password
    console.log('Changing password')
    // Show success message or redirect
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Change Password</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oldPassword">
              <Lock className="inline mr-2" />
              Old Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="oldPassword"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
              <Lock className="inline mr-2" />
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              <Lock className="inline mr-2" />
              Confirm New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
</boltArtifact>

I've implemented the ChangePassword component with the following features:

1. Form for changing password with old password, new password, and confirm password fields
2. Basic form validation (password matching)
3. Responsive design using Tailwind CSS

These components cover the admin login, profile management, forgot password, and change password functionalities. The next steps would be to implement the remaining components:

1. EmailTemplates
2. TranslationMaster
3. HomePageSettings
4. OurTeamMaster
5. CMSMaster

Would you like me to continue implementing these components, or do you have any specific requirements or changes for the existing