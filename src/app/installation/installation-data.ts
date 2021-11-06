import { CableTableError } from "./../errors/cable-table-errors";
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
      // Check whether supplied form data is valid
      if (
         data["cable-type"] &&
         !Object.values(CABLE_TYPE).includes(
            data["cable-type"],
         )
      ) {
         throw new Error(CableTableError.InvalidFormData);
      } else {
         this._cableType =
            data["cable-type"] || CABLE_TYPE.SINGLES70;
      }

      // Check whether supplied form data is valid
      if (
         data["installation-method"] &&
         !Object.values(REF_METHODS).includes(
            data["installation-method"],
         )
      ) {
         throw new Error(CableTableError.InvalidFormData);
      } else {
         this._refMethod =
            data["installation-method"] ||
            REF_METHODS.REF_C;
      }

      // Check whether supplied form data is valid
      if (
         data["nominal-voltage"] &&
         !Object.values(NOMINAL_VOLTAGE).includes(
            data["nominal-voltage"],
         )
      ) {
         throw new Error(CableTableError.InvalidFormData);
      } else {
         this._nominalVoltage =
            data["nominal-voltage"] || NOMINAL_VOLTAGE.SP;
      }

      // Check whether supplied form data is valid number
      if (
         (data.length && isNaN(Number(data.length))) ||
         (data.zdb && isNaN(Number(data.zdb))) ||
         (data["ocpd-current"] &&
            isNaN(Number(data["ocpd-current"]))) ||
         (data["load-current"] &&
            isNaN(Number(data["load-current"])))
      ) {
         throw new Error(CableTableError.InvalidFormData);
      } else {
         this._length = data["length"] || 2;
         this._zdb = data["zdb"] || 0.35;
         this._ocpdCurrent = data["ocpd-current"] || 63;
         this._loadCurrent = data["load-current"] || 63;
      }
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
