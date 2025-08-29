export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  origin: 'imported' | 'made-in-india';
  images: string[];
  features: string[];
  specifications: {
    dimensions: string;
    materials: string;
    colors: string;
    ratedVoltage: string;
    lightingPower: string;
    typicalConsumption: string;
    freshAirVentilation: string;
  };
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProductSeriesDetail {
  id: string;
  name: string;
  description: string;
  images: string[];
  models: string[];
  colors: string[];
  sizes: {
    variant: string;
    dimensions: string;
  }[];
  material: string;
  features: string[];
  applications: string[];
  availableMaterials: string[];
  origin: 'imported' | 'made-in-india';
}