import { SWA70 } from "./BS7671-tables/swa70";
import { REF_METHODS } from "./../types/RefMethods";
import { NominalVoltage } from "../types/NominalVoltage";
import { CableCreator } from "./CableCreator";

export class SWA70Cable extends CableCreator {
   constructor(
      refMethod: keyof typeof REF_METHODS,
      nominalVoltage: NominalVoltage,
   ) {
      const cableTable = new SWA70();
      super(refMethod, nominalVoltage, cableTable);
   }
}
