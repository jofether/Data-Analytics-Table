import React from 'react';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { Input } from './components/Input';
import { mockReports, mockAnalytics } from './mockData';

export function ReportsPage() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <Button>+ Generate Report</Button>
      </div>

      <Card>
        <div className="mb-4">
          <Input
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{report.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <Badge variant={report.status === 'Completed' ? 'success' : 'warning'}>
                      {report.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.views}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="secondary" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
