import React, { useState, useEffect } from 'react'
import { Mail, Edit2 } from 'lucide-react'

interface EmailTemplate {
  id: number
  name: string
  subject: string
  content: string
}

const EmailTemplates: React.FC = () => {
  const [templates, setTemplates] = useState<EmailTemplate[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // TODO: Fetch email templates from API
    const mockTemplates: EmailTemplate[] = [
      { id: 1, name: 'Welcome Email', subject: 'Welcome to Telepath', content: 'Welcome to Telepath! We're excited to have you on board.' },
      { id: 2, name: 'Password Reset', subject: 'Password Reset Request', content: 'You have requested a password reset. Please use the following OTP: {OTP}' },
      { id: 3, name: 'Account Verification', subject: 'Verify Your Account', content: 'Please verify your account using the following link: {VERIFICATION_LINK}' },
    ]
    setTemplates(mockTemplates)
  }, [])

  const handleEditTemplate = (template: EmailTemplate) => {
    setSelectedTemplate(template)
    setIsEditing(true)
  }

  const handleSaveTemplate = () => {
    if (selectedTemplate) {
      // TODO: Implement API call to save template
      console.log('Saving template:', selectedTemplate)
      setTemplates(prevTemplates =>
        prevTemplates.map(t => t.id === selectedTemplate.id ? selectedTemplate : t)
      )
      setIsEditing(false)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Email Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Template List</h2>
          <ul>
            {templates.map(template => (
              <li key={template.id} className="mb-2 flex justify-between items-center">
                <span>{template.name}</span>
                <button
                  onClick={() => handleEditTemplate(template)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        {selectedTemplate && (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Edit Template</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSaveTemplate(); }}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  value={selectedTemplate.subject}
                  onChange={(e) => setSelectedTemplate({...selectedTemplate, subject: e.target.value})}
                  readOnly={!isEditing}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                  Content
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="content"
                  rows={6}
                  value={selectedTemplate.content}
                  onChange={(e) => setSelectedTemplate({...selectedTemplate, content: e.target.value})}
                  readOnly={!isEditing}
                />
              </div>
              {isEditing && (
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmailTemplates