import { FileUtils } from "../../utils/files.utils.js";
import {
  StaticSection,
  Mandate,
  OrgChart,
  Contacts,
  Mayors
} from "../../types/about.types.js";

export class AboutService {
  constructor(private readonly repo: FileUtils = new FileUtils("src/data/static/about")) {}

  getMission(): Promise<StaticSection> {
    return this.repo.readJSON<StaticSection>("mission.json");
  }

  getVision(): Promise<StaticSection> {
    return this.repo.readJSON<StaticSection>("vision.json");
  }

  getMandate(): Promise<Mandate> {
    return this.repo.readJSON<Mandate>("mandate.json");
  }

  getHistory(): Promise<string> {
    return this.repo.readMarkdown("history.md");
  }

  getOrgChart(): Promise<OrgChart> {
    return this.repo.readJSON<OrgChart>("org-chart.json");
  }

  getContacts(): Promise<Contacts> {
    return this.repo.readJSON<Contacts>("contacts.json");
  }

  getMayors(): Promise<Mayors> {
    return this.repo.readJSON<Mayors>("mayors.json");
  }
}
