import { NominalVoltage } from "./../types/NominalVoltage";
import { REF_METHODS } from "./../types/RefMethods";
import { CurrentCarryingCapacityTable } from "./../types/CurrentCarryingCapacityTable";
import { VoltDropTable } from "./../types/VoltDrop";
export abstract class CableTableClass {
   public abstract getCCC(
      nominalVoltage: NominalVoltage,
      refMethod: keyof typeof REF_METHODS,
   ): CurrentCarryingCapacityTable | null;
   public abstract getVD(
      nominalVoltage: NominalVoltage,
      refMethod: keyof typeof REF_METHODS,
   ): VoltDropTable | null;
}
