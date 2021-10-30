import { CSARecord } from "./../../types/csa-record";
import { NOMINAL_VOLTAGE } from "../../types/NominalVoltage";
import { REF_METHODS } from "../../types/RefMethods";
import { CableTableClass } from "../cable-tables/cable-tables";

export class CableCreator {
   protected readonly cccValues: CSARecord[];
   protected readonly vdValues: CSARecord[];

   constructor(
      refMethod: keyof typeof REF_METHODS,
      nominalVoltage: NOMINAL_VOLTAGE,
      cableTableClass: CableTableClass,
   ) {
      const cccTable: CSARecord[] | null =
         cableTableClass.getCCCTable(
            nominalVoltage,
            refMethod,
         );
      const vdTable: CSARecord[] | null =
         cableTableClass.getVDTable(
            nominalVoltage,
            refMethod,
         );

      if (cccTable == null || vdTable == null) {
         throw new Error("Invalid Reference Method");
      }

      this.cccValues = cccTable;
      this.vdValues = vdTable;
   }

   public getCurrentCarryingCapacity(csa: number) {
      return this.getValue(this.cccValues, csa);
   }
   public getVoltDrop(csa: number) {
      return this.getValue(this.vdValues, csa);
   }

   private getValue(table: CSARecord[], csa: number) {
      const output = table.map(record => {
         if (record[0] == csa) {
            return record[1];
         } else return;
      });
      console.log(output);
      return output[0] || null;
   }
}
