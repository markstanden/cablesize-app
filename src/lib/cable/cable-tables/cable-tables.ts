import { CSARecord } from "./../../types/csa-record";
import { NOMINAL_VOLTAGE } from "../../types/NominalVoltage";
import { REF_METHODS } from "../../types/RefMethods";
export abstract class CableTableClass {
   public abstract getCCCTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: keyof typeof REF_METHODS,
   ): CSARecord[] | null;
   public abstract getVDTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: keyof typeof REF_METHODS,
   ): CSARecord[] | null;
}
