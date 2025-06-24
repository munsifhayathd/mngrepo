"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Mock data for surveying assignments
const mockAssignments = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Senior Land Surveyor",
    project: "Perth Infrastructure Development",
    startDate: "2025-07-01",
    endDate: "2025-12-31",
    status: "Confirmed",
  },
  {
    id: "2",
    name: "John Stevens",
    role: "UAV Pilot",
    project: "Pilbara Resource Survey",
    startDate: "2025-07-15",
    endDate: "2025-10-15",
    status: "Pending",
  },
  {
    id: "3",
    name: "Michael Thompson",
    role: "Survey Technician",
    project: "Brisbane Land Development",
    startDate: "2025-08-01",
    endDate: "2026-02-28",
    status: "Confirmed",
  },
  {
    id: "4",
    name: "Emma Robinson",
    role: "GIS Specialist",
    project: "Melbourne Utility Mapping",
    startDate: "2025-06-15",
    endDate: "2025-11-30",
    status: "Confirmed",
  },
  {
    id: "5",
    name: "David Wilson",
    role: "Hydrographic Surveyor",
    project: "Sydney Coastal Survey",
    startDate: "2025-08-10",
    endDate: "2026-01-15",
    status: "Pending",
  },
  {
    id: "6",
    name: "Lisa Chen",
    role: "Engineering Surveyor",
    project: "Darwin Port Expansion",
    startDate: "2025-09-01",
    endDate: "2026-03-01",
    status: "Confirmed",
  },
  {
    id: "7",
    name: "Robert Garcia",
    role: "Survey Project Manager",
    project: "Perth Infrastructure Development",
    startDate: "2025-07-20",
    endDate: "2025-12-20",
    status: "Pending",
  },
];

interface PersonnelAllocationTableProps {
  projectFilter?: string;
  roleFilter?: string;
  statusFilter?: string;
}

export function PersonnelAllocationTable({ projectFilter = "All", roleFilter = "All", statusFilter = "All" }: PersonnelAllocationTableProps) {
  const [assignments, setAssignments] = useState(mockAssignments);

  // Filter assignments based on active filters
  const filteredAssignments = assignments.filter(assignment => {
    const projectMatch = projectFilter === "All" || assignment.project === projectFilter;
    const roleMatch = roleFilter === "All" || assignment.role === roleFilter;
    const statusMatch = statusFilter === "All" || assignment.status === statusFilter;
    
    return projectMatch && roleMatch && statusMatch;
  });

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Surveyor Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Project
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                End Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {filteredAssignments.map((assignment) => (
              <tr key={assignment.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {assignment.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {assignment.role}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {assignment.project}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {assignment.startDate}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {assignment.endDate}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Badge 
                    variant={assignment.status === "Confirmed" ? "default" : "outline"}
                    className={assignment.status === "Confirmed" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"}
                  >
                    {assignment.status}
                  </Badge>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs text-red-600 hover:text-red-800"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredAssignments.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">No surveying assignments found matching the current filters.</p>
        </div>
      )}
    </div>
  );
}