import { CSARecord } from "../../types/csa-record";
import { NOMINAL_VOLTAGE } from "../../types/nominal-voltage";
import { REF_METHODS } from "../../types/ref-methods";
export abstract class CableTableTemplate {
   public abstract getCCCTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: REF_METHODS,
   ): CSARecord[] | Error;
   public abstract getVDTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: REF_METHODS,
   ): CSARecord[] | Error;
}
