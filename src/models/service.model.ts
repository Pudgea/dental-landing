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
    warnings?: string[]
    faq?: FAQ[];
    advantages?: SubcategoryAdvantage[]
  }

  export type SubcategoryAdvantageType = 'desc'|'list'
  export interface SubcategoryAdvantage {
    type: SubcategoryAdvantageType
    data: string
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
  