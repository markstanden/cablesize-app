import { CableFormData } from "./../types/cableFormData";

export class CableData {
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
}
