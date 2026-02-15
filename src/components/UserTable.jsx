import React from 'react';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { Button } from './Button';

export function UserTable({ users = [] }) {
  const [selectedUsers, setSelectedUsers] = React.useState([]);

  const toggleUser = (id) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    );
  };

  const getStatusVariant = (status) => {
    const variants = {
      'Active': 'success',
      'Inactive': 'danger',
      'Pending': 'warning'
    };
    return variants[status] || 'default';
  };

  const getRoleColor = (role) => {
    const colors = {
      'Admin': 'blue',
      'Editor': 'purple',
      'Viewer': 'green'
    };
    return colors[role] || 'indigo';
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 cursor-pointer"
                  checked={selectedUsers.length === users.length && users.length > 0}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedUsers(users.map(u => u.id));
                    } else {
                      setSelectedUsers([]);
                    }
                  }}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 cursor-pointer"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleUser(user.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Avatar name={user.name} size="md" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-600">{user.email}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant="primary">{user.role}</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant={getStatusVariant(user.status)}>{user.status}</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="secondary" size="sm">Edit</Button>
                    <Button variant="danger" size="sm">Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
