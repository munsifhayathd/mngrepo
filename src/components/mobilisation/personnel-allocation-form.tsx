"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PersonnelAllocationFormProps, PersonnelAllocationData } from "@/types/mobilisation";

export function PersonnelAllocationForm({ onSubmit, onCancel }: PersonnelAllocationFormProps) {
  const [formData, setFormData] = useState<Omit<PersonnelAllocationData, 'id' | 'status'>>({
    surveyorName: "",
    role: "",
    project: "",
    startDate: "",
    endDate: "",
    location: "",
    projectManager: "",
    surveyType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      ...formData, 
      status: "Pending", 
      id: Date.now().toString() 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="surveyorName">Surveyor Name</Label>
          <Input
            id="surveyorName"
            name="surveyorName"
            value={formData.surveyorName}
            onChange={handleChange}
            placeholder="Enter surveyor name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select a role</option>
            <option value="Senior Land Surveyor">Senior Land Surveyor</option>
            <option value="Survey Technician">Survey Technician</option>
            <option value="GIS Specialist">GIS Specialist</option>
            <option value="Laser Scanning Operator">Laser Scanning Operator</option>
            <option value="UAV Pilot">UAV Pilot</option>
            <option value="Hydrographic Surveyor">Hydrographic Surveyor</option>
            <option value="Engineering Surveyor">Engineering Surveyor</option>
            <option value="Survey Project Manager">Survey Project Manager</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="project">Surveying Project</Label>
          <select
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select project</option>
            <option value="Perth Infrastructure Development">Perth Infrastructure Development</option>
            <option value="Pilbara Resource Survey">Pilbara Resource Survey</option>
            <option value="Brisbane Land Development">Brisbane Land Development</option>
            <option value="Melbourne Utility Mapping">Melbourne Utility Mapping</option>
            <option value="Sydney Coastal Survey">Sydney Coastal Survey</option>
            <option value="Darwin Port Expansion">Darwin Port Expansion</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="surveyType">Survey Type</Label>
          <select
            id="surveyType"
            name="surveyType"
            value={formData.surveyType}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select survey type</option>
            <option value="Land & Property Survey">Land & Property Survey</option>
            <option value="Laser Scanning (LiDAR)">Laser Scanning (LiDAR)</option>
            <option value="Aerial Surveying">Aerial Surveying</option>
            <option value="Utility Locating">Utility Locating</option>
            <option value="Engineering Survey">Engineering Survey</option>
            <option value="Hydrographic Survey">Hydrographic Survey</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select location</option>
            <option value="Perth, WA">Perth, Western Australia</option>
            <option value="Brisbane, QLD">Brisbane, Queensland</option>
            <option value="Melbourne, VIC">Melbourne, Victoria</option>
            <option value="Sydney, NSW">Sydney, New South Wales</option>
            <option value="Darwin, NT">Darwin, Northern Territory</option>
            <option value="Karratha, WA">Karratha, Western Australia</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="projectManager">Project Manager</Label>
          <Input
            id="projectManager"
            name="projectManager"
            value={formData.projectManager}
            onChange={handleChange}
            placeholder="Enter project manager name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Create Assignment
        </Button>
      </div>
    </form>
  );
}