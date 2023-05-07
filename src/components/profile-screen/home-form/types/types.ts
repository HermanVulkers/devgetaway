export interface FormValues {
  description: string;
  city: string;
  propertyType: string;
  photos: File[];
  deleveloperAmenities: {
    ergonomicChair: boolean;
    externalMonitors: number;
    internetSpeed: number;
    laptopStand: boolean;
    standingDesk: boolean;
  };
  amenities: {
    airConditioning: boolean;
    dryer: boolean;
    essentials: boolean;
    hairDryer: boolean;
    iron: boolean;
    kitchen: boolean;
    parking: boolean;
    tv: boolean;
    washer: boolean;
    wifi: boolean;
    workspace: boolean;
  };
}
