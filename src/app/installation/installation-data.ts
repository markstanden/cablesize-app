import { NOMINAL_VOLTAGE } from "../types/nominal-voltage";
import { REF_METHODS } from "../types/ref-methods";
import { CABLE_TYPE } from "../types/cable-type";
import { CableFormData } from "../types/cable-form-data";

export class InstallationData {
   private _cableType: CABLE_TYPE;
   private _refMethod: REF_METHODS;
   private _length: number;
   private _nominalVoltage: NOMINAL_VOLTAGE;
   private _zdb: number;
   private _ocpdCurrent: number;
   private _loadCurrent: number;

   constructor(data: CableFormData) {
      this._cableType =
         data["cable-type"] || CABLE_TYPE.SINGLES70;
      this._refMethod =
         data["installation-method"] || REF_METHODS.REF_C;
      this._length = data["length"] || 2;
      this._nominalVoltage =
         data["nominal-voltage"] || NOMINAL_VOLTAGE.SP;
      this._zdb = data["zdb"] || 0.35;
      this._ocpdCurrent = data["ocpd-current"] || 63;
      this._loadCurrent = data["load-current"] || 63;
   }

   get cableType(): CABLE_TYPE {
      return this._cableType;
   }

   get refMethod(): REF_METHODS {
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
