import React, { useState, useEffect } from 'react'
import { Globe, Plus, Edit2, Trash2 } from 'lucide-react'

interface Translation {
  id: number
  key: string
  value: string
}

const TranslationMaster: React.FC = () => {
  const [translations, setTranslations] = useState<Translation[]>([])
  const [newTranslation, setNewTranslation] = useState({ key: '', value: '' })
  const [editingId, setEditingId] = useState<number | null>(null)

  useEffect(() => {
    // TODO: Fetch translations from API
    const mockTranslations: Translation[] = [
      { id: 1, key: 'welcome_message', value: 'Welcome to Telepath' },
      { id: 2, key: 'login_button', value: 'Log In' },
      { id: 3, key: 'signup_button', value: 'Sign Up' },
    ]
    setTranslations(mockTranslations)
  }, [])

  const handleAddTranslation = () => {
    if (newTranslation.key && newTranslation.value) {
      // TODO: Implement API call to add translation
      const newId = Math.max(...translations.map(t => t.id), 0) + 1
      setTranslations([...translations, { ...newTranslation, id: newId }])
      setNewTranslation({ key: '', value: '' })
    }
  }

  const handleEditTranslation = (id: number) => {
    setEditingId(id)
  }

  const handleSaveTranslation = (id: number, newValue: string) => {
    // TODO: Implement API call to update translation
    setTranslations(translations.map(t => t.id === id ? { ...t, value: newValue } : t))
    setEditingId(null)
  }

  const handleDeleteTranslation = (id: number) => {
    // TODO: Implement API call to delete translation
    setTranslations(translations.filter(t => t.id !== id))
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Translation Master</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Add New Translation</h2>
        <div className="flex mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            type="text"
            placeholder="Key"
            value={newTranslation.key}
            onChange={(e) => setNewTranslation({ ...newTranslation, key: e.target.value })}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            type="text"
            placeholder="Value"
            value={newTranslation.value}
            onChange={(e) => setNewTranslation({ ...newTranslation, value: e.target.value })}
          />
          <button
            onClick={handleAddTranslation}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-4">Translations</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Key</th>
              <th className="text-left">Value</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {translations.map(translation => (
              <tr key={translation.id}>
                <td>{translation.key}</td>
                <td>
                  {editingId === translation.id ? (
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={translation.value}
                      onChange={(e) => handleSaveTranslation(translation.id, e.target.value)}
                      onBlur={() => setEditingId(null)}
                      autoFocus
                    />
                  ) : (
                    translation.value
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleEditTranslation(translation.id)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteTranslation(translation.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TranslationMaster