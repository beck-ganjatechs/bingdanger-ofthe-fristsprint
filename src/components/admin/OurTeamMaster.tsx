import React, { useState, useEffect } from 'react'
import { Users, Plus, Edit2, Trash2, Eye, ToggleLeft, ToggleRight } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  title: string
  description: string
  image: string
  sequence: number
  isActive: boolean
}

const OurTeamMaster: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // TODO: Fetch team members from API
    const mockTeamMembers: TeamMember[] = [
      { id: 1, name: 'John Doe', title: 'CEO', description: 'Founder and visionary leader', image: 'https://example.com/john.jpg', sequence: 1, isActive: true },
      { id: 2, name: 'Jane Smith', title: 'CTO', description: 'Technical expert and innovator', image: 'https://example.com/jane.jpg', sequence: 2, isActive: true },
      { id: 3, name: 'Mike Johnson', title: 'COO', description: 'Operations and strategy specialist', image: 'https://example.com/mike.jpg', sequence: 3, isActive: false },
    ]
    setTeamMembers(mockTeamMembers)
  }, [])

  const handleAddMember = () => {
    const newMember: TeamMember = {
      id: Math.max(...teamMembers.map(m => m.id), 0) + 1,
      name: '',
      title: '',
      description: '',
      image: '',
      sequence: teamMembers.length + 1,
      isActive: true
    }
    setSelectedMember(newMember)
    setIsEditing(true)
  }

  const handleEditMember = (member: TeamMember) => {
    setSelectedMember(member)
    setIsEditing(true)
  }

  const handleSaveMember = () => {
    if (selectedMember) {
      // TODO: Implement API call to save member
      if (selectedMember.id === 0) {
        setTeamMembers([...teamMembers, { ...selectedMember, id: Math.max(...teamMembers.map(m => m.id), 0) + 1 }])
      } else {
        setTeamMembers(teamMembers.map(m => m.id === selectedMember.id ? selectedMember : m))
      }
      setIsEditing(false)
      setSelectedMember(null)
    }
  }

  const handleDeleteMember = (id: number) => {
    // TODO: Implement API call to delete member
    setTeamMembers(teamMembers.filter(m => m.id !== id))
  }

  const handleToggleActive = (id: number) => {
    // TODO: Implement API call to toggle active status
    setTeamMembers(teamMembers.map(m => m.id === id ? { ...m, isActive: !m.isActive } : m))
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Our Team Master</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Team Members</h2>
              <button
                onClick={handleAddMember}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <ul>
              {teamMembers.map(member => (
                <li key={member.id} className="mb-2 flex justify-between items-center">
                  <span>{member.name} - {member.title}</span>
                  <div>
                    <button
                      onClick={() => handleEditMember(member)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteMember(member.id)}
                      className="text-red-500 hover:text-red-700 mr-2"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleToggleActive(member.id)}
                      className={`${member.isActive ? 'text-green-500 hover:text-green-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      {member.isActive ? <ToggleRight className="h-5 w-5" /> : <ToggleLeft className="h-5 w-5" />}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {selectedMember && (
          <div className="w-full md:w-1/2">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit' : 'View'} Team Member</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleSaveMember(); }}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={selectedMember.name}
                    onChange={(e) => setSelectedMember({...selectedMember, name: e.target.value})}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    value={selectedMember.title}
                    onChange={(e) => setSelectedMember({...selectedMember, title: e.target.value})}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    rows={3}
                    value={selectedMember.description}
                    onChange={(e) => setSelectedMember({...selectedMember, description: e.target.value})}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                    Image URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    type="text"
                    value={selectedMember.image}
                    onChange={(e) => setSelectedMember({...selectedMember, image: e.target.value})}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sequence">
                    Sequence
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sequence"
                    type="number"
                    value={selectedMember.sequence}
                    onChange={(e) => setSelectedMember({...selectedMember, sequence: parseInt(e.target.value)})}
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
          </div>
        )}
      </div>
    </div>
  )
}

export default OurTeamMaster