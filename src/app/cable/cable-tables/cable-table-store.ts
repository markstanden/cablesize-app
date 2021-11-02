import { CableTable } from "../../types/cable-table";
import { CableTableStorage } from "../../types/cable-table-storage";
import { NOMINAL_VOLTAGE } from "../../types/NominalVoltage";
import { REF_METHODS } from "../../types/RefMethods";
import { CableTableTemplate } from "./cable-table-template";

export class CableTableStore implements CableTableStorage {
   protected readonly cccValues: CableTable;
   protected readonly vdValues: CableTable;

   constructor(
      refMethod: keyof typeof REF_METHODS,
      nominalVoltage: NOMINAL_VOLTAGE,
      cableTable: CableTableTemplate,
   ) {
      const cccTable: CableTable | null =
         cableTable.getCCCTable(nominalVoltage, refMethod);
      const vdTable: CableTable | null =
         cableTable.getVDTable(nominalVoltage, refMethod);
      if (cccTable == null || vdTable == null) {
         throw new Error("Invalid Reference Method");
      }

      this.cccValues = this.sortedTable(cccTable);
      this.vdValues = this.sortedTable(vdTable);
   }

   /**
    * Returns a shallow copy of the provided array after sorting by CSA
    */
   private sortedTable(table: CableTable): CableTable {
      return [
         ...table.sort((a, b) => {
            return a[0] - b[0];
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
