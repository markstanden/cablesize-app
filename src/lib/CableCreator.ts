import { NominalVoltage } from "./../types/NominalVoltage";
import { REF_METHODS } from "./../types/RefMethods";
import { VoltDropTable } from "./../types/VoltDrop";
import { CurrentCarryingCapacityTable } from "../types/CurrentCarryingCapacityTable";
import { CableTableClass } from "./CableTableClass";
export abstract class CableCreator {
   protected readonly cccValues: CurrentCarryingCapacityTable;
   protected readonly vdValues: VoltDropTable;

   constructor(
      refMethod: keyof typeof REF_METHODS,
      nominalVoltage: NominalVoltage,
      cableTableClass: CableTableClass,
   ) {
      const cccTable: CurrentCarryingCapacityTable | null =
         cableTableClass.getCCC(nominalVoltage, refMethod);
      const vdTable: CurrentCarryingCapacityTable | null =
         cableTableClass.getVD(nominalVoltage, refMethod);

      if (cccTable == null || vdTable == null) {
         throw new Error("Invalid Reference Method");
      }

      this.cccValues = cccTable;
      this.vdValues = vdTable;
   }
}
