import React, { useState, useEffect } from 'react'
import { FileText, Edit2 } from 'lucide-react'

interface CMSPage {
  id: number
  title: string
  slug: string
  content: string
}

const CMSMaster: React.FC = () => {
  const [pages, setPages] = useState<CMSPage[]>([])
  const [selectedPage, setSelectedPage] = useState<CMSPage | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // TODO: Fetch CMS pages from API
    const mockPages: CMSPage[] = [
      { id: 1, title: 'Terms & Conditions', slug: 'terms-and-conditions', content: 'These are the terms and conditions...' },
      { id: 2, title: 'Privacy Policy', slug: 'privacy-policy', content: 'This is our privacy policy...' },
      { id: 3, title: 'How It Works', slug: 'how-it-works', content: 'Learn how Telepath works...' },
    ]
    setPages(mockPages)
  }, [])

  const handleEditPage = (page: CMSPage) => {
    setSelectedPage(page)
    setIsEditing(true)
  }

  const handleSavePage = () => {
    if (selectedPage) {
      // TODO: Implement API call to save page
      setPages(pages.map(p => p.id === selectedPage.id ? selectedPage : p))
      setIsEditing(false)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">CMS Master</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Pages</h2>
            <ul>
              {pages.map(page => (
                <li key={page.id} className="mb-2 flex justify-between items-center">
                  <span>{page.title}</span>
                  <button
                    onClick={() => handleEditPage(page)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {selectedPage && (
          <div className="w-full md:w-2/3">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit' : 'View'} Page</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleSavePage(); }}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    value={selectedPage.title}
                    onChange={(e) => setSelectedPage({...selectedPage, title: e.target.value})}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                    Slug
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="slug"
                    type="text"
                    value={selectedPage.slug}
                    onChange={(e) => setSelectedPage({...selectedPage, slug: e.target.value})}
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
                    rows={10}
                    value={selectedPage.content}
                    onChange={(e) => setSelectedPage({...selectedPage, content: e.target.value})}
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

export default CMSMaster