import { PublicOffices, KOfficals, BrgyDir } from './gov.types.js';
import {
  StaticSection,
  Mandate,
  OrgChart,
  Mayors,
  Contacts,
} from './about.types.js';
export interface JsonReponse {
  data:
    | PublicOffices[]
    | KOfficals[]
    | BrgyDir[]
    | StaticSection[]
    | Mandate[]
    | OrgChart[]
    | Mayors[]
    | Contacts[]
  count?: number;
}
