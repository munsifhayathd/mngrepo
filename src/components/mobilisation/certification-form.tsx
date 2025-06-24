"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CertificationFormProps, CertificationData } from "@/types/mobilisation";

export function CertificationForm({ onSubmit, onCancel }: CertificationFormProps) {
  const [formData, setFormData] = useState<Omit<CertificationData, 'id' | 'status'>>({
    surveyorName: "",
    certificationType: "",
    project: "",
    issueDate: "",
    expiryDate: "",
    certificationNumber: "",
    issuingAuthority: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      ...formData, 
      status: "Valid", 
      id: Date.now().toString() 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="surveyorName">Surveyor Name</Label>
          <select
            id="surveyorName"
            name="surveyorName"
            value={formData.surveyorName}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select surveyor</option>
            <option value="Sarah Mitchell">Sarah Mitchell</option>
            <option value="John Stevens">John Stevens</option>
            <option value="Michael Thompson">Michael Thompson</option>
            <option value="Emma Robinson">Emma Robinson</option>
            <option value="David Wilson">David Wilson</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="certificationType">Certification Type</Label>
          <select
            id="certificationType"
            name="certificationType"
            value={formData.certificationType}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select certification</option>
            <option value="Licensed Surveyor">Licensed Surveyor</option>
            <option value="UAV Pilot License">UAV Pilot License</option>
            <option value="Laser Scanning">Laser Scanning Certification</option>
            <option value="Hydrographic Surveying">Hydrographic Surveying</option>
            <option value="Engineering Surveying">Engineering Surveying</option>
            <option value="GIS Professional">GIS Professional</option>
            <option value="Safety Training">Safety Training</option>
            <option value="First Aid">First Aid & CPR</option>
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
          <Label htmlFor="certificationNumber">Certification Number</Label>
          <Input
            id="certificationNumber"
            name="certificationNumber"
            value={formData.certificationNumber}
            onChange={handleChange}
            placeholder="Enter certification number"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="issuingAuthority">Issuing Authority</Label>
          <Input
            id="issuingAuthority"
            name="issuingAuthority"
            value={formData.issuingAuthority}
            onChange={handleChange}
            placeholder="Enter issuing authority"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="issueDate">Issue Date</Label>
          <Input
            id="issueDate"
            name="issueDate"
            type="date"
            value={formData.issueDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input
            id="expiryDate"
            name="expiryDate"
            type="date"
            value={formData.expiryDate}
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
          Add Certification
        </Button>
      </div>
    </form>
  );
}