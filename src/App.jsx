import React from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { UserTable } from './components/UserTable';

function App() {
  return (
    // [BUG - LAYOUT] 'flex-col' stacks the sidebar on top of the content instead of side-by-side.
    // [FIX] <div className="flex h-screen bg-gray-100 font-sans">
    <div className="flex flex-col h-screen bg-gray-100 font-sans">
      
      <Sidebar />

      {/* [BUG - TYPO] 'overflow-hidde' is invalid. Scrollbars might appear where they shouldn't. */}
      {/* [FIX] <div className="flex-1 flex flex-col overflow-hidden"> */}
      <div className="flex-1 flex flex-col overflow-hidde">
        <Navbar />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Admin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Users" value="12,345" change="+12%" icon="👥" color="blue" />
            <StatCard title="Revenue" value="$45,678" change="+8%" icon="💰" color="green" />
            <StatCard title="Bounce Rate" value="24.5%" change="-2%" icon="📉" color="red" />
            <StatCard title="Active Now" value="573" change="+5%" icon="⚡" color="yellow" />
          </div>

          <UserTable />
        </main>
      </div>
    </div>
  );
}

export default App;