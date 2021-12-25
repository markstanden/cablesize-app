import { CABLE_PARAMS } from "../types/cable-params";
import { CableTableError } from "./../errors/cable-table-errors";
import { NOMINAL_VOLTAGE } from "../types/nominal-voltage";
import { REF_METHODS } from "../types/ref-methods";
import { CABLE_TYPE } from "../types/cable-type";
import { isValidEnumValue } from "../../lib/is-valid-enum-value";

/**
 * Creates an InstallationData object from a URLSearchParams object.
 * Sets sensible defaults for empty fields.
 * Throws CableTableError.InvalidFormData Error if invalid data is present.
 */
export class InstallationData {
   private _cableType: CABLE_TYPE;
   private _refMethod: REF_METHODS;
   private _length: number;
   private _nominalVoltage: NOMINAL_VOLTAGE;
   private _zdb: number;
   private _ocpdCurrent: number;
   private _loadCurrent: number;

   constructor(data: URLSearchParams) {
      // Check whether supplied form data is valid

      this._cableType =
         this.getVerifiedParam(
            CABLE_TYPE,
            data.get(CABLE_PARAMS.CABLE_TYPE),
         ) || CABLE_TYPE.SINGLES70;

      this._refMethod =
         this.getVerifiedParam(
            REF_METHODS,
            data.get(CABLE_PARAMS.REF_METHOD),
         ) || REF_METHODS.REF_C;

      this._nominalVoltage =
         this.getVerifiedParam(
            NOMINAL_VOLTAGE,
            data.get(CABLE_PARAMS.NOMINAL_VOLTAGE),
         ) || NOMINAL_VOLTAGE.SP;

      // Check whether supplied form data is valid number
      if (
         isNaN(Number(data.get(CABLE_PARAMS.LENGTH))) ||
         isNaN(Number(data.get(CABLE_PARAMS.ZDB))) ||
         isNaN(
            Number(data.get(CABLE_PARAMS.OCPD_CURRENT)),
         ) ||
         isNaN(Number(data.get(CABLE_PARAMS.LOAD_CURRENT)))
      ) {
         throw new Error(CableTableError.InvalidFormData);
      } else {
         this._length =
            Number(data.get(CABLE_PARAMS.LENGTH)) || 2;
         this._zdb =
            Number(data.get(CABLE_PARAMS.ZDB)) || 0.35;
         this._ocpdCurrent =
            Number(data.get(CABLE_PARAMS.OCPD_CURRENT)) ||
            63;
         this._loadCurrent =
            Number(data.get(CABLE_PARAMS.LOAD_CURRENT)) ||
            63;
      }
   }

   private getVerifiedParam<ENUM>(
      listEnum: ENUM,
      param: string | null,
   ) {
      if (param == null) {
         return null;
      }
      if (isValidEnumValue(listEnum, param)) {
         return param;
      } else {
         throw new Error(CableTableError.InvalidFormData);
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
