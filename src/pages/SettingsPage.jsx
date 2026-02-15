import React from 'react';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Avatar } from './components/Avatar';
import { Badge } from './components/Badge';
import { mockUsers } from './mockData';

export function SettingsPage() {
  const [formData, setFormData] = React.useState({
    companyName: 'Analytics Corp',
    email: 'admin@analytics.com',
    timezone: 'UTC-5',
    theme: 'light',
    notifications: true,
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Menu */}
        <div className="lg:col-span-1">
          <Card>
            <nav className="space-y-2">
              {['Profile', 'Security', 'Notifications', 'Integrations', 'Billing'].map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm font-medium text-gray-700"
                >
                  {item}
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card title="Profile Settings">
            <div className="space-y-4">
              <Input
                label="Company Name"
                value={formData.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
              />
              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                <select
                  value={formData.timezone}
                  onChange={(e) => handleChange('timezone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option>UTC-5</option>
                  <option>UTC-6</option>
                  <option>UTC</option>
                  <option>UTC+1</option>
                </select>
              </div>
            </div>
          </Card>

          <Card title="Appearance">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                <div className="flex gap-4">
                  {['light', 'dark', 'auto'].map((theme) => (
                    <label key={theme} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="theme"
                        value={theme}
                        checked={formData.theme === theme}
                        onChange={(e) => handleChange('theme', e.target.value)}
                        className="cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 capitalize">{theme}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card title="Preferences">
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.notifications}
                  onChange={(e) => handleChange('notifications', e.target.checked)}
                  className="cursor-pointer"
                />
                <span className="text-sm text-gray-700">Enable email notifications</span>
              </label>
            </div>
          </Card>

          <div className="flex gap-3">
            <Button variant="primary">Save Changes</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
