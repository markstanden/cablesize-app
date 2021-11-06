import { CableTableError } from "./../errors/cable-table-errors";
import { NOMINAL_VOLTAGE } from "../types/nominal-voltage";
import { REF_METHODS } from "../types/ref-methods";
import { CABLE_TYPE } from "../types/cable-type";
import { CableFormData } from "../types/cable-form-data";
import { isValidEnumKey } from "../../lib/is-valid-enum-key";

export class InstallationData {
   private _cableType: CABLE_TYPE;
   private _refMethod: REF_METHODS;
   private _length: number;
   private _nominalVoltage: NOMINAL_VOLTAGE;
   private _zdb: number;
   private _ocpdCurrent: number;
   private _loadCurrent: number;

   private isPresent(
      data: URLSearchParams,
      term: string,
   ): boolean {
      return data.get(term) != null;
   }

   constructor(data: URLSearchParams) {
      // Check whether supplied form data is valid TT
      if (cableType) {
         if (isValidEnumKey(CABLE_TYPE, cableType)) {
            this._cableType = cableType;
         } else {
            throw new Error(
               CableTableError.InvalidFormData,
            );
         }
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
