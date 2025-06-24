"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { TravelBookingFormProps, TravelBookingData } from "@/types/mobilisation";

export function TravelBookingForm({ onSubmit, onCancel }: TravelBookingFormProps) {
  const [formData, setFormData] = useState<Omit<TravelBookingData, 'id' | 'status' | 'estimatedCost'>>({
    equipmentType: "",
    project: "",
    origin: "",
    destination: "",
    deploymentDate: "",
    returnDate: "",
    transportMethod: "",
    operator: "",
    specialRequirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      ...formData, 
      status: "Quote Requested", 
      estimatedCost: Math.floor(Math.random() * 5000) + 1000,
      id: Date.now().toString() 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="equipmentType">Equipment Type</Label>
          <select
            id="equipmentType"
            name="equipmentType"
            value={formData.equipmentType}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select equipment</option>
            <option value="Total Station">Total Station</option>
            <option value="GPS/GNSS Receiver">GPS/GNSS Receiver</option>
            <option value="Laser Scanner">Laser Scanner</option>
            <option value="UAV/Drone">UAV/Drone</option>
            <option value="Survey Vehicle">Survey Vehicle</option>
            <option value="Hydrographic Equipment">Hydrographic Equipment</option>
            <option value="Data Collector">Data Collector</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="project">Project</Label>
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
          <Label htmlFor="origin">Origin</Label>
          <Input
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="Equipment origin location"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select destination</option>
            <option value="Perth, WA">Perth, Western Australia</option>
            <option value="Brisbane, QLD">Brisbane, Queensland</option>
            <option value="Melbourne, VIC">Melbourne, Victoria</option>
            <option value="Sydney, NSW">Sydney, New South Wales</option>
            <option value="Darwin, NT">Darwin, Northern Territory</option>
            <option value="Karratha, WA">Karratha, Western Australia</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="deploymentDate">Deployment Date</Label>
          <Input
            id="deploymentDate"
            name="deploymentDate"
            type="date"
            value={formData.deploymentDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="returnDate">Return Date</Label>
          <Input
            id="returnDate"
            name="returnDate"
            type="date"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="transportMethod">Transport Method</Label>
          <select
            id="transportMethod"
            name="transportMethod"
            value={formData.transportMethod}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">Select transport method</option>
            <option value="Road Transport">Road Transport</option>
            <option value="Air Freight">Air Freight</option>
            <option value="Express Courier">Express Courier</option>
            <option value="Specialized Transport">Specialized Transport</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="operator">Operator</Label>
          <select
            id="operator"
            name="operator"
            value={formData.operator}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">Select operator</option>
            <option value="Sarah Mitchell">Sarah Mitchell</option>
            <option value="John Stevens">John Stevens</option>
            <option value="Michael Thompson">Michael Thompson</option>
            <option value="Emma Robinson">Emma Robinson</option>
            <option value="David Wilson">David Wilson</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="specialRequirements">Special Requirements</Label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          placeholder="Enter any special handling or transport requirements..."
        />
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Schedule Equipment Deployment
        </Button>
      </div>
    </form>
  );
}