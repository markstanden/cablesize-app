import { CableTableClass as CableTables } from "../cable-tables";
import { CSAMap } from "../../types/CSAMap";
import { REF_METHODS } from "../../types/RefMethods";
import { CurrentCarryingCapacityTable } from "../../types/CurrentCarryingCapacityTable";
import { NOMINAL_VOLTAGE } from "../../types/NominalVoltage";

export class SWA70CableTables implements CableTables {
   public getCCCTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: keyof typeof REF_METHODS,
   ): CurrentCarryingCapacityTable | null {
      switch (nominalVoltage) {
         case "230V":
            switch (refMethod) {
               case "C":
                  return this.ccc_refC_SP;
               case "D":
                  return this.ccc_refD_SP;
               case "E":
                  return this.ccc_refE_SP;
               default:
                  return null;
            }
         case "400V":
            switch (refMethod) {
               case "C":
                  return this.ccc_refC_TP;
               case "D":
                  return this.ccc_refD_TP;
               case "E":
                  return this.ccc_refE_TP;
               default:
                  return null;
            }
         default:
            return null;
      }
   }

   public getVDTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: keyof typeof REF_METHODS,
   ): CSAMap | null {
      switch (nominalVoltage) {
         case "230V":
            switch (refMethod) {
               case "C":
               case "D":
               case "E":
                  return this.voltDrop_SP;
               default:
                  return null;
            }
         case "400V":
            switch (refMethod) {
               case "C":
               case "D":
               case "E":
                  return this.voltDrop_TP;
               default:
                  return null;
            }
         default:
            return null;
      }
   }

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D4A BS7671 Column 2 (Ref C, Single Phase) */
   private readonly ccc_refC_SP: CurrentCarryingCapacityTable =
      {
         1.5: 21,
         2.5: 28,
         4: 38,
         6: 49,
         10: 67,
         16: 89,
         25: 118,
         35: 145,
         50: 175,
         70: 222,
         95: 269,
         120: 310,
         150: 356,
         185: 405,
         240: 476,
         300: 547,
         400: 621,
      };

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D4A BS7671 Column 3 (Ref C, Three Phase) */
   private readonly ccc_refC_TP: CurrentCarryingCapacityTable =
      {
         1.5: 18,
         2.5: 25,
         4: 33,
         6: 42,
         10: 58,
         16: 77,
         25: 102,
         35: 125,
         50: 151,
         70: 192,
         95: 231,
         120: 267,
         150: 306,
         185: 348,
         240: 409,
         300: 469,
         400: 540,
      };

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D4A BS7671 Column 4 (Ref E, Single Phase) */
   private readonly ccc_refE_SP: CurrentCarryingCapacityTable =
      {
         1.5: 22,
         2.5: 31,
         4: 41,
         6: 53,
         10: 72,
         16: 97,
         25: 128,
         35: 157,
         50: 190,
         70: 241,
         95: 291,
         120: 336,
         150: 386,
         185: 439,
         240: 516,
         300: 592,
         400: 683,
      };

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D4A BS7671 Column 5 (Ref E, Three Phase) */
   private readonly ccc_refE_TP: CurrentCarryingCapacityTable =
      {
         1.5: 19,
         2.5: 26,
         4: 35,
         6: 45,
         10: 62,
         16: 83,
         25: 110,
         35: 135,
         50: 163,
         70: 207,
         95: 251,
         120: 290,
         150: 332,
         185: 378,
         240: 445,
         300: 510,
         400: 590,
      };

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D4A BS7671 Column 6 (Ref D, Single Phase) */
   private readonly ccc_refD_SP: CurrentCarryingCapacityTable =
      {
         1.5: 22,
         2.5: 29,
         4: 37,
         6: 46,
         10: 60,
         16: 78,
         25: 99,
         35: 119,
         50: 140,
         70: 173,
         95: 204,
         120: 231,
         150: 261,
         185: 292,
         240: 336,
         300: 379,
      };

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D4A BS7671 Column 7 (Ref D, Three Phase) */
   private readonly ccc_refD_TP: CurrentCarryingCapacityTable =
      {
         1.5: 18,
         2.5: 24,
         4: 30,
         6: 38,
         10: 50,
         16: 64,
         25: 82,
         35: 98,
         50: 116,
         70: 143,
         95: 169,
         120: 192,
         150: 217,
         185: 243,
         240: 280,
         300: 316,
      };

   /** Volt drop of the cable (in mV/A/m) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]: Volt Drop per ampere, per metre;
    * All values from Table 4D4B BS7671 Column 3 (Voltage Drop) */
   private readonly voltDrop_SP: CSAMap = {
      1.5: 29,
      2.5: 18,
      4: 11,
      6: 7.3,
      10: 4.4,
      16: 2.8,
      25: 1.75,
      35: 1.25,
      50: 0.94,
      70: 0.65,
      95: 0.5,
      120: 0.41,
      150: 0.34,
      185: 0.29,
      240: 0.24,
      300: 0.21,
      400: 0.185,
   };

   /** Volt drop of the cable (in mV/A/m) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]: Volt Drop per ampere, per metre;
    * All values from Table 4D4B BS7671 Column 4 (Voltage Drop) */
   private readonly voltDrop_TP: CSAMap = {
      1.5: 25,
      2.5: 15,
      4: 9.5,
      6: 6.4,
      10: 3.8,
      16: 2.4,
      25: 1.5,
      35: 1.1,
      50: 0.81,
      70: 0.57,
      95: 0.43,
      120: 0.35,
      150: 0.29,
      185: 0.25,
      240: 0.21,
      300: 0.185,
      400: 0.16,
   };
}
