import React, { useState, useEffect } from 'react'
import { Home, Image, Users, DollarSign, Mail } from 'lucide-react'

interface HomePageSettings {
  banner: {
    title: string
    subtitle: string
    buttonText: string
    image: string
  }
  aboutUs: {
    title: string
    content: string
    buttonText: string
    image: string
  }
  howItWorks: {
    title: string
    steps: { title: string; description: string }[]
  }
  ourTeam: {
    title: string
    subtitle: string
  }
  subscriptionPlan: {
    title: string
    subtitle: string
  }
  getInTouch: {
    title: string
    email: string
    socialLinks: { platform: string; url: string }[]
  }
  footer: {
    logo: string
    content: string
  }
  seo: {
    title: string
    description: string
  }
}

const HomePageSettings: React.FC = () => {
  const [settings, setSettings] = useState<HomePageSettings | null>(null)
  const [activeSection, setActiveSection] = useState('banner')

  useEffect(() => {
    // TODO: Fetch home page settings from API
    const mockSettings: HomePageSettings = {
      banner: {
        title: 'Welcome to Telepath',
        subtitle: 'Connecting minds, empowering health',
        buttonText: 'Get Started',
        image: 'https://example.com/banner.jpg'
      },
      aboutUs: {
        title: 'About Telepath',
        content: 'Telepath is a revolutionary platform connecting patients with mental health professionals.',
        buttonText: 'Learn More',
        image: 'https://example.com/about-us.jpg'
      },
      howItWorks: {
        title: 'How It Works',
        steps: [
          { title: 'Sign Up', description: 'Create your account' },
          { title: 'Find a Therapist', description: 'Browse our network of professionals' },
          { title: 'Start Your Journey', description: 'Begin your path to better mental health' }
        ]
      },
      ourTeam: {
        title: 'Our Team',
        subtitle: 'Meet the experts behind Telepath'
      },
      subscriptionPlan: {
        title: 'Subscription Plans',
        subtitle: 'Choose the plan that fits your needs'
      },
      getInTouch: {
        title: 'Get In Touch',
        email: 'contact@telepath.com',
        socialLinks: [
          { platform: 'Facebook', url: 'https://facebook.com/telepath' },
          { platform: 'Twitter', url: 'https://twitter.com/telepath' },
          { platform: 'LinkedIn', url: 'https://linkedin.com/company/telepath' }
        ]
      },
      footer: {
        logo: 'https://example.com/logo.png',
        content: '© 2023 Telepath. All rights reserved.'
      },
      seo: {
        title: 'Telepath - Mental Health Platform',
        description: 'Connect with mental health professionals online through Telepath.'
      }
    }
    setSettings(mockSettings)
  }, [])

  const handleInputChange = (section: string, field: string, value: string) => {
    if (settings) {
      setSettings({
        ...settings,
        [section]: {
          ...settings[section as keyof HomePageSettings],
          [field]: value
        }
      })
    }
  }

  const handleSaveSettings = () => {
    // TODO: Implement API call to save settings
    console.log('Saving settings:', settings)
  }

  if (!settings) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Home Page Settings</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Sections</h2>
            <ul>
              {Object.keys(settings).map((section) => (
                <li
                  key={section}
                  className={`mb-2 cursor-pointer ${activeSection === section ? 'text-blue-500 font-bold' : ''}`}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Settings</h2>
            {activeSection === 'banner' && (
              <div>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                  type="text"
                  placeholder="Title"
                  value={settings.banner.title}
                  onChange={(e) => handleInputChange('banner', 'title', e.target.value)}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                  type="text"
                  placeholder="Subtitle"
                  value={settings.banner.subtitle}
                  onChange={(e) => handleInputChange('banner', 'subtitle', e.target.value)}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                  type="text"
                  placeholder="Button Text"
                  value={settings.banner.buttonText}
                  onChange={(e) => handleInputChange('banner', 'buttonText', e.target.value)}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                  type="text"
                  placeholder="Image URL"
                  value={settings.banner.image}
                  onChange={(e) => handleInputChange('banner', 'image', e.target.value)}
                />
              </div>
            )}
            {/* Add similar sections for other parts of the home page */}
            <button
              onClick={handleSaveSettings}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageSettings