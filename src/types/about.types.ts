export interface StaticSection {
  title: string;
  content: string;
}

export interface Mandate {
  title: string;
  legalBasis: string;
  description: string;
}

export interface OrgChart {
  head: string;
  units: { name: string }[];
}

export interface Contacts {
  address: string;
  phone: string;
  email: string;
}
