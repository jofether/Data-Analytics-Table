import React from 'react';

export function UserTable() {
  const users = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Jones', email: 'bob@example.com', role: 'Editor', status: 'Offline' },
    { id: 3, name: 'Charlie Day', email: 'charlie@example.com', role: 'User', status: 'Active' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-800">Recent Users</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collaps">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-100">{user.name}</div>
                    <div className="text-sm text-gray-100">{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}
                  `}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}