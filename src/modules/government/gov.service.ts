import { FileUtils } from "../../utils/files.utils.js";
import { KOfficals, BrgyDir, PublicOffices } from "../../types/gov.types.js";

export class GovService {
    constructor(private readonly repo: FileUtils = new FileUtils("src/data/static/gov")) {}

    getKeyOfficials(): Promise<KOfficals> {
        return this.repo.readJSON<KOfficals>("key_officials.json");
    }

    getDirectoryOfBarangays(): Promise<BrgyDir> {
        return this.repo.readJSON<BrgyDir>("directory_of_brgys.json");
    }

    getPublicOffices(): Promise<PublicOffices> {
        return this.repo.readJSON<PublicOffices>("public_offices.json");
    }
}