// Surveying Certification Types
export interface CertificationData {
  id?: string;
  surveyorName: string;
  certificationType: string;
  project: string;
  issueDate: string;
  expiryDate: string;
  certificationNumber: string;
  issuingAuthority: string;
  status?: string;
}

// Surveying Assignment Types
export interface PersonnelAllocationData {
  id?: string;
  surveyorName: string;
  role: string;
  project: string;
  startDate: string;
  endDate: string;
  location: string;
  projectManager: string;
  surveyType: string;
  status?: string;
}

// Equipment Logistics Types
export interface TravelBookingData {
  id?: string;
  equipmentType: string;
  project: string;
  deploymentDate: string;
  returnDate: string;
  origin: string;
  destination: string;
  transportMethod: string;
  operator: string;
  specialRequirements?: string;
  estimatedCost?: number;
  status?: string;
}

// Form Props Types
export interface CertificationFormProps {
  onSubmit: (data: CertificationData) => void;
  onCancel: () => void;
}

export interface PersonnelAllocationFormProps {
  onSubmit: (data: PersonnelAllocationData) => void;
  onCancel: () => void;
}

export interface TravelBookingFormProps {
  onSubmit: (data: TravelBookingData) => void;
  onCancel: () => void;
} 