import { CableTableError } from "./../errors/cable-table-errors";
import { CableTable } from "../types/cable-table";
import { CableTableStorage } from "../types/cable-table-storage";
import { CSAValues } from "../types/csa-values";

export class CurrentCarryingCapacity {
   private _table: CableTable;
   constructor(tableStore: CableTableStorage) {
      try {
         this._table = tableStore.getCCCTable();
      } catch (error) {
         throw new Error(CableTableError.InvalidStore);
      }
   }

   /* Returns the minimum CSA to carry the required current. */
   public getMinCSA(current: number): keyof CSAValues {
      const table = [...this._table];
      for (let index = 0; index < table.length; index++) {
         const csaEntry = table[index];
         if (csaEntry[1] >= current) {
            return csaEntry[0];
         }
      }
      throw new Error(
         CableTableError.OutOfApplicationScope,
      );
   }

   protected getValue(csa: number) {
      const output = this._table.filter(record => {
         return record[0] == csa;
      });
      return output[0];
   }
}
