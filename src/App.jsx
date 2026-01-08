import React from 'react';

function App() {
  const users = [
    { id: 1, name: 'Edrian Hernandez', email: 'edrian@university.edu', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jett Mark Manalo', email: 'jett.mark@university.edu', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Jofether Mendoza', email: 'jofether@university.edu', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Maurice Dela Cruz', email: 'maurice@university.edu', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Guest User', email: 'guest.123456789@temp-mail.com', role: 'Viewer', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition">
            Export CSV
          </button>
        </header>

        {/* TABLE CONTAINER */}
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            
            {/* TABLE HEADER */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  
                  {/* Name Column */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500">ID: #{user.id}</div>
                      </div>
                    </div>
                  </td>

                  {/* Email Column */}
                  <td className="px-6 py-4 whitespace-nowrap max-w-xs truncate text-sm text-gray-500">
                    {user.email}
                  </td>

                  {/* Role Column */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.role}
                  </td>

                  {/* Status Column (Badge) */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        user.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {user.status}
                    </span>
                  </td>

                  {/* Actions Column */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="py-3 flex items-center justify-between border-t border-gray-200 mt-4">
            <p className="text-sm text-gray-700">Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">97</span> results</p>
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Previous</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">1</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Next</a>
            </nav>
        </div>
      </div>
    </div>
  );
}

export default App;