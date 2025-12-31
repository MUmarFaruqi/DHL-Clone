
export interface ShipmentStatus {
  id: string;
  status: 'In Transit' | 'Delivered' | 'Pending' | 'Customs Clearance' | 'Out for Delivery';
  origin: string;
  destination: string;
  estimatedDelivery: string;
  history: {
    date: string;
    location: string;
    description: string;
  }[];
}

export interface QuoteRequest {
  origin: string;
  destination: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
}

export interface NewsUpdate {
  title: string;
  link: string;
}
