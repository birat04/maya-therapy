export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  modalities: string[];
  image: string;
  imageAlt: string;
}

export interface WhoWeHelpItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OfficeFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface NavLink {
  label: string;
  href: string;
}
