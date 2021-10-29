import { NOMINAL_VOLTAGE } from "../../types/NominalVoltage";
import { REF_METHODS } from "../../types/RefMethods";
import { CurrentCarryingCapacityTable } from "../../types/CurrentCarryingCapacityTable";
import { CSAMap } from "../../types/CSAMap";
export abstract class CableTableClass {
   public abstract getCCCTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: keyof typeof REF_METHODS,
   ): CurrentCarryingCapacityTable | null;
   public abstract getVDTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: keyof typeof REF_METHODS,
   ): CSAMap | null;
}
