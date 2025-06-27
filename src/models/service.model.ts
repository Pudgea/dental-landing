export interface Service {
    category: string;
    subcategories: Subcategory[];
  }
  
  export interface Subcategory {
    name: string;
    description: string;
    details?: string[]
    benefits?: string[];
    reasons?: string []
    stages?:string[]
    types?: SubcategoryType[]
    preparationSteps?: string[];
    treatmentSteps?: string []
    careRecommendations?: string[];
    faq?: FAQ[];
  }

  export interface SubcategoryType {
    name: string;
    description: string;
    features: string[];
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  