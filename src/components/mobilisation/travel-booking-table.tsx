"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Mock data for equipment logistics
const mockEquipmentLogistics = [
  {
    id: "1",
    equipmentType: "Total Station",
    project: "Perth Infrastructure Development",
    origin: "Perth Office",
    destination: "Perth, WA",
    deploymentDate: "2025-07-01",
    returnDate: "2025-07-15",
    transportStatus: "Confirmed",
    operator: "Sarah Mitchell",
    totalCost: "$1,450",
  },
  {
    id: "2",
    equipmentType: "Laser Scanner",
    project: "Pilbara Resource Survey",
    origin: "Brisbane Office",
    destination: "Karratha, WA",
    deploymentDate: "2025-07-10",
    returnDate: "2025-07-24",
    transportStatus: "Pending",
    operator: "John Stevens",
    totalCost: "$2,890",
  },
  {
    id: "3",
    equipmentType: "UAV/Drone",
    project: "Brisbane Land Development",
    origin: "Sydney Office",
    destination: "Brisbane, QLD",
    deploymentDate: "2025-08-01",
    returnDate: "2025-08-30",
    transportStatus: "Confirmed",
    operator: "Michael Thompson",
    totalCost: "$1,120",
  },
  {
    id: "4",
    equipmentType: "GPS/GNSS Receiver",
    project: "Melbourne Utility Mapping",
    origin: "Melbourne Office",
    destination: "Melbourne, VIC",
    deploymentDate: "2025-07-20",
    returnDate: "2025-08-05",
    transportStatus: "Confirmed",
    operator: "Emma Robinson",
    totalCost: "$750",
  },
  {
    id: "5",
    equipmentType: "Survey Vehicle",
    project: "Darwin Port Expansion",
    origin: "Adelaide Office",
    destination: "Darwin, NT",
    deploymentDate: "2025-09-01",
    returnDate: "2025-09-15",
    transportStatus: "Quote Requested",
    operator: "David Wilson",
    totalCost: "$2,980",
  },
];

interface EquipmentLogisticsTableProps {
  statusFilter?: string;
  projectFilter?: string;
  destinationFilter?: string;
}

export function TravelBookingTable({ statusFilter = "All", projectFilter = "All", destinationFilter = "All" }: EquipmentLogisticsTableProps) {
  const [logistics, setLogistics] = useState(mockEquipmentLogistics);

  // Filter logistics based on active filters
  const filteredLogistics = logistics.filter(item => {
    const statusMatch = statusFilter === "All" || item.transportStatus === statusFilter;
    const projectMatch = projectFilter === "All" || item.project === projectFilter;
    const destinationMatch = destinationFilter === "All" || item.destination.includes(destinationFilter);
    
    return statusMatch && projectMatch && destinationMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Quote Requested":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "Cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Equipment
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Project
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Origin → Destination
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Deployment Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Return Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Operator
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Cost
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {filteredLogistics.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {item.equipmentType}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {item.project}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {item.origin} → {item.destination}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {item.deploymentDate}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {item.returnDate}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {item.operator}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Badge 
                    variant="outline"
                    className={getStatusColor(item.transportStatus)}
                  >
                    {item.transportStatus}
                  </Badge>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {item.totalCost}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs"
                    >
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs"
                    >
                      Edit
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredLogistics.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">No equipment logistics found matching the current filters.</p>
        </div>
      )}
    </div>
  );
}