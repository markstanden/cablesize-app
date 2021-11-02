import { NOMINAL_VOLTAGE } from "../types/NominalVoltage";
import { REF_METHODS } from "../types/RefMethods";
import { CableType } from "../types/cable-type";
import { CableFormData } from "../types/cable-form-data";

export class InstallationData {
   private _cableType: keyof CableType;
   private _refMethod: keyof typeof REF_METHODS;
   private _length: number;
   private _nominalVoltage: NOMINAL_VOLTAGE;
   private _zdb: number;
   private _ocpdCurrent: number;
   private _loadCurrent: number;

   constructor(data: CableFormData) {
      this._cableType = data["cable-type"] || "singles70";
      this._refMethod = data["installation-method"] || "C";
      this._length = data["length"] || 2;
      this._nominalVoltage =
         data["nominal-voltage"] || "230V";
      this._zdb = data["zdb"] || 0.35;
      this._ocpdCurrent = data["ocpd-current"] || 63;
      this._loadCurrent = data["load-current"] || 63;
   }

   get cableType(): keyof CableType {
      return this._cableType;
   }

   get refMethod(): keyof typeof REF_METHODS {
      return this._refMethod;
   }

   get length(): number {
      return this._length;
   }

   get nominalVoltage(): NOMINAL_VOLTAGE {
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
