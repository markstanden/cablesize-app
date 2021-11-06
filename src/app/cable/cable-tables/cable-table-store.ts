import { CableTableError } from "./../../errors/cable-table-errors";
import { CableTable } from "./../../types/cable-table";

import { CableTableStorage } from "../../types/cable-table-storage";
import { NOMINAL_VOLTAGE } from "../../types/nominal-voltage";
import { REF_METHODS } from "../../types/ref-methods";
import { CableTableTemplate } from "./cable-table-template";

/**
 * Object to store the correct data table for the
 * cable type, nominal voltage and reference method supplied.
 * Throws an CableTableError.InvalidRefMethodForCableType Error if
 * BS7671 doesn't support the reference method for the cable type.
 */
export class CableTableStore implements CableTableStorage {
   protected readonly cccValues: CableTable;
   protected readonly vdValues: CableTable;

   constructor(
      refMethod: REF_METHODS,
      nominalVoltage: NOMINAL_VOLTAGE,
      cableTable: CableTableTemplate,
   ) {
      const cccTable: CableTable | Error =
         cableTable.getCCCTable(nominalVoltage, refMethod);
      const vdTable: CableTable | Error =
         cableTable.getVDTable(nominalVoltage, refMethod);
      if (
         cccTable instanceof Error ||
         vdTable instanceof Error
      ) {
         throw new Error(
            CableTableError.InvalidRefMethodForCableType,
         );
      }

      this.cccValues = this.sortedTable(cccTable);
      this.vdValues = this.sortedTable(vdTable);
   }

   /**
    * Returns a shallow copy of the provided array after sorting by current carrying capacity
    */
   private sortedTable(table: CableTable): CableTable {
      return [
         ...table.sort((a, b) => {
            return a[1] - b[1];
         }),
      ];
   }

   /**
    * Returns a shallow copy of the CCC Table
    */
   public getCCCTable() {
      return this.sortedTable(this.cccValues);
   }
   /**
    * Returns a shallow copy of the VD Table
    */
   public getVDTable() {
      return this.sortedTable(this.vdValues);
   }
}
