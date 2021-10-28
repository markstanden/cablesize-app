import { REF_METHODS } from "./RefMethods";
import { CurrentCarryingCapacityTable } from "./CurrentCarryingCapacityTable";
import { NominalVoltage } from "./NominalVoltage";

export type CableTable = Map<
   NominalVoltage,
   RefMethodTable
>;

export type RefMethodTable = Map<
   keyof typeof REF_METHODS,
   CurrentCarryingCapacityTable
>;
