import { CableFormData } from "../types/cable-form-data";

export class InstallationData {
   private _cableType: string;
   private _length: number;
   private _nominalVoltage: number;
   private _zdb: number;
   private _ocpdCurrent: number;
   private _loadCurrent: number;

   constructor(data: CableFormData) {
      this._cableType = data["cable-type"] || "singles";
      this._length = data["length"] || 0;
      this._nominalVoltage = data["nominal-voltage"] || 230;
      this._zdb = data["zdb"] || 0.35;
      this._ocpdCurrent = data["ocpd-current"] || 0;
      this._loadCurrent = data["load-current"] || 0;
   }

   get cableType(): string {
      return this._cableType;
   }

   get length(): number {
      return this._length;
   }

   get nominalVoltage(): number {
      return this._nominalVoltage;
   }

   get zdb(): number {
      return this._zdb;
   }

   get ocpdCurrent(): number {
      return this._ocpdCurrent;
   }

   get loadCurrent(): number {
      return this._loadCurrent;
   }
}
