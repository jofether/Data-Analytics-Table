import React from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { UserTable } from './components/UserTable';
import { Modal } from './components/Modal';
import { Input } from './components/Input';
import { Badge } from './components/Badge';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: '', email: '', role: 'Viewer' });

  const users = [
    { id: 1, name: 'Edrian Hernandez', email: 'edrian@university.edu', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jett Mark Manalo', email: 'jett.mark@university.edu', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Jofether Mendoza', email: 'jofether@university.edu', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Maurice Dela Cruz', email: 'maurice@university.edu', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Guest User', email: 'guest.123456789@temp-mail.com', role: 'Viewer', status: 'Pending' },
  ];

  const stats = [
    { title: 'Total Users', value: '2,847', change: 12.5, icon: '👥', color: 'indigo' },
    { title: 'Active Sessions', value: '1,234', change: 8.2, icon: '🟢', color: 'green' },
    { title: 'Revenue', value: '$52,420', change: 23.5, icon: '💰', color: 'purple' },
    { title: 'Reports Generated', value: '743', change: -2.4, icon: '📊', color: 'blue' },
  ];

  const recentActivities = [
    { id: 1, user: 'Edrian Hernandez', action: 'Created new report', time: '2 hours ago', icon: '📄' },
    { id: 2, user: 'Jett Mark Manalo', action: 'Updated user permissions', time: '4 hours ago', icon: '🔐' },
    { id: 3, user: 'Maurice Dela Cruz', action: 'Exported data', time: '1 day ago', icon: '📥' },
    { id: 4, user: 'Jofether Mendoza', action: 'Added comment on report', time: '2 days ago', icon: '💬' },
  ];

  const handleAddUser = () => {
    console.log('Adding user:', formData);
    setFormData({ name: '', email: '', role: 'Viewer' });
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto p-8 space-y-8">
            
            {/* Header Section */}
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back! Here's your analytics overview.</p>
              </div>
              <Button onClick={() => setModalOpen(true)} size="lg">
                + Add User
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                  color={stat.color}
                />
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2" title="Revenue Trend">
                <div className="h-64 flex items-center justify-center text-gray-400">
                  <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <polyline
                      points="0,150 50,100 100,120 150,80 200,90 250,60 300,100 350,70 400,85"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="3"
                    />
                    <path
                      d="M 0 150 Q 50 100 100 120 T 200 90 T 300 100 T 400 85 L 400 200 L 0 200 Z"
                      fill="url(#gradient)"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: '#4f46e5', stopOpacity: 0 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex gap-4 mt-4 text-sm text-gray-600">
                  <div>• Jan: $12,400</div>
                  <div>• Feb: $18,600</div>
                  <div>• Mar: $21,200</div>
                </div>
              </Card>

              <Card title="Top Metrics">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Conversion Rate</span>
                      <span className="text-sm font-bold text-indigo-600">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Engagement</span>
                      <span className="text-sm font-bold text-green-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Retention</span>
                      <span className="text-sm font-bold text-purple-600">72%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Users Section */}
            <Card title="User Management" subtitle="Manage and monitor all active users">
              <UserTable users={users} />
            </Card>

            {/* Activity and Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card title="Recent Activity">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                      <div className="text-2xl flex-shrink-0">{activity.icon}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card title="Quick Stats">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600">Avg. Session Time</p>
                      <p className="text-2xl font-bold text-blue-600">4m 28s</p>
                    </div>
                    <span className="text-3xl">⏱️</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600">Bounce Rate</p>
                      <p className="text-2xl font-bold text-green-600">32%</p>
                    </div>
                    <span className="text-3xl">📉</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600">Pages/Session</p>
                      <p className="text-2xl font-bold text-purple-600">6.2</p>
                    </div>
                    <span className="text-3xl">📄</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Footer Info */}
            <Card footer={<Button variant="outline">Learn More →</Button>}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">New Features Available</h3>
                  <p className="text-gray-600 text-sm mt-1">Check out the latest updates and improvements to enhance your analytics dashboard experience.</p>
                </div>
              </div>
            </Card>

          </div>
        </main>
      </div>

      {/* Add User Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New User"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddUser}>
              Add User
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input
            label="Full Name"
            placeholder="Enter user's full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="user@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            >
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;