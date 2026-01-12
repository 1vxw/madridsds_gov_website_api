export interface KOfficals {
  name: string;
  position: string;
  imgPath: string;
}

export interface BrgyDir {
  barangay: string;
  filePath: string;
}

export interface PublicOffices {
  data: {
    offices_and_agencies: {
      office: string;
      initialism?: string;
    };
    contact_info: {
      contact_number: string;
      email: string;
      social?: {
        type: 'fb' | 'ig' | 'x' | 'linkedin';
        url: string;
      };
    };
    address: string;
    google_map_url: string;
    office_in_charge: { name: string; position: string };
  }[];
}


