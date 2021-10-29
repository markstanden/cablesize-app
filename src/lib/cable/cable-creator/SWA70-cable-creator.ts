import { SWA70CableTables } from "../cable-tables/swa70";
import { REF_METHODS } from "../../types/RefMethods";
import { NOMINAL_VOLTAGE } from "../../types/NominalVoltage";
import { CableCreator } from "./CableCreator";

export class SWA70CableCreator extends CableCreator {
   constructor(
      refMethod: keyof typeof REF_METHODS,
      nominalVoltage: NOMINAL_VOLTAGE,
   ) {
      const cableTable = new SWA70CableTables();
      super(refMethod, nominalVoltage, cableTable);
   }
}
