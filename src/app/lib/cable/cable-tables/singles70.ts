import { REF_METHODS } from "../../types/RefMethods";
import { NOMINAL_VOLTAGE } from "../../types/NominalVoltage";
import { CableTableTemplate } from "./cable-table-template";
import { CSARecord } from "../../types/csa-record";

export class Singles70CableTables
   implements CableTableTemplate
{
   public getCCCTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: keyof typeof REF_METHODS,
   ): CSARecord[] | null {
      switch (nominalVoltage) {
         case "230V":
            switch (refMethod) {
               case "A":
                  return this.ccc_refA_SP;
               case "B":
                  return this.ccc_refB_SP;
               case "C":
                  return this.ccc_refC_SP;
               default:
                  return null;
            }
         case "400V":
            switch (refMethod) {
               case "A":
                  return this.ccc_refA_TP;
               case "B":
                  return this.ccc_refB_TP;
               case "C":
                  return this.ccc_refC_TP;
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
   ): CSARecord[] | null {
      switch (nominalVoltage) {
         case "230V":
            switch (refMethod) {
               case "A":
               case "B":
                  return this.vd_refAB_SP;
               case "C":
               case "EF":
                  return this.vd_refCF_SP;
               default:
                  return null;
            }
         case "400V":
            switch (refMethod) {
               case "A":
               case "B":
                  return this.vd_refAB_TP;
               case "C":
               case "EF":
                  return this.vd_refCF_Trefoil_TP;
               default:
                  return null;
            }
         default:
            return null;
      }
   }
   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 2 (Ref A, Single Phase) */
   private readonly ccc_refA_SP: CSARecord[] = [
      [1, 11],
      [1.5, 14.5],
      [2.5, 20],
      [4, 26],
      [6, 34],
      [10, 46],
      [16, 61],
      [25, 80],
      [35, 99],
      [50, 119],
      [70, 151],
      [95, 182],
      [120, 210],
      [150, 240],
      [185, 273],
      [240, 321],
      [300, 367],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 3 (Ref A, Three Phase) */
   private readonly ccc_refA_TP: CSARecord[] = [
      [1, 10.5],
      [1.5, 13.5],
      [2.5, 18],
      [4, 24],
      [6, 31],
      [10, 42],
      [16, 56],
      [25, 73],
      [35, 89],
      [50, 108],
      [70, 136],
      [95, 164],
      [120, 188],
      [150, 216],
      [185, 245],
      [240, 286],
      [300, 328],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 4 (Ref B, Single Phase) */
   private readonly ccc_refB_SP: CSARecord[] = [
      [1, 13.5],
      [1.5, 17.5],
      [2.5, 24],
      [4, 32],
      [6, 41],
      [10, 57],
      [16, 76],
      [25, 101],
      [35, 125],
      [50, 151],
      [70, 192],
      [95, 232],
      [120, 269],
      [150, 300],
      [185, 341],
      [240, 400],
      [300, 458],
      [400, 546],
      [500, 626],
      [630, 720],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 5 (Ref B, Three Phase) */
   private readonly ccc_refB_TP: CSARecord[] = [
      [1, 12],
      [1.5, 15.5],
      [2.5, 21],
      [4, 28],
      [6, 36],
      [10, 50],
      [16, 68],
      [25, 89],
      [35, 110],
      [50, 134],
      [70, 171],
      [95, 207],
      [120, 239],
      [150, 262],
      [185, 296],
      [240, 346],
      [300, 394],
      [400, 467],
      [500, 533],
      [630, 611],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 6 (Ref C, Single Phase) */
   private readonly ccc_refC_SP: CSARecord[] = [
      [1, 15.5],
      [1.5, 20],
      [2.5, 27],
      [4, 37],
      [6, 47],
      [10, 65],
      [16, 87],
      [25, 114],
      [35, 141],
      [50, 182],
      [70, 234],
      [95, 284],
      [120, 330],
      [150, 381],
      [185, 436],
      [240, 515],
      [300, 594],
      [400, 694],
      [500, 792],
      [630, 904],
      [800, 1030],
      [1000, 1154],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 7 (Ref C, Three Phase) */
   private readonly ccc_refC_TP: CSARecord[] = [
      [1, 14],
      [1.5, 18],
      [2.5, 25],
      [4, 33],
      [6, 43],
      [10, 59],
      [16, 79],
      [25, 104],
      [35, 129],
      [50, 167],
      [70, 214],
      [95, 261],
      [120, 303],
      [150, 349],
      [185, 400],
      [240, 472],
      [300, 545],
      [400, 634],
      [500, 723],
      [630, 826],
      [800, 943],
      [1000, 1058],
   ];

   /** Volt drop of the cable (in mV/A/m) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Volt Drop per ampere, per metre];
    * All values from Table 4D1B BS7671 Column 3 (Ref AB Voltage Drop) */
   private readonly vd_refAB_SP: CSARecord[] = [
      [1, 44],
      [1.5, 29],
      [2.5, 18],
      [4, 11],
      [6, 7.3],
      [10, 4.4],
      [16, 2.8],
      [25, 1.8],
      [35, 1.3],
      [50, 1.0],
      [70, 0.72],
      [95, 0.56],
      [120, 0.47],
      [150, 0.41],
      [185, 0.37],
      [240, 0.33],
      [300, 0.31],
      [400, 0.29],
      [500, 0.28],
      [630, 0.27],
   ];
   /** Volt drop of the cable (in mV/A/m) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Volt Drop per ampere, per metre];
    * All values from Table 4D1B BS7671 Column 4 (Ref C&F (Touching) Voltage Drop) */
   private readonly vd_refCF_SP: CSARecord[] = [
      [1, 44],
      [1.5, 29],
      [2.5, 18],
      [4, 11],
      [6, 7.3],
      [10, 4.4],
      [16, 2.8],
      [25, 1.75],
      [35, 1.25],
      [50, 0.95],
      [70, 0.66],
      [95, 0.5],
      [120, 0.41],
      [150, 0.34],
      [185, 0.29],
      [240, 0.25],
      [300, 0.22],
      [400, 0.2],
      [500, 0.185],
      [630, 0.175],
      [800, 0.165],
      [1000, 0.16],
   ];

   /** Volt drop of the cable (in mV/A/m) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Volt Drop per ampere, per metre];
    * All values from Table 4D1B BS7671 Column 6 (Ref AB Enclosed Voltage Drop) */
   private readonly vd_refAB_TP: CSARecord[] = [
      [1, 38],
      [1.5, 25],
      [2.5, 15],
      [4, 9.5],
      [6, 6.4],
      [10, 3.8],
      [16, 2.4],
      [25, 1.55],
      [35, 1.1],
      [50, 0.85],
      [70, 0.61],
      [95, 0.48],
      [120, 0.41],
      [150, 0.36],
      [185, 0.32],
      [240, 0.29],
      [300, 0.27],
      [400, 0.25],
      [500, 0.25],
      [630, 0.24],
   ];
   /** Volt drop of the cable (in mV/A/m) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Volt Drop per ampere, per metre];
    * All values from Table 4D1B BS7671 Column 7 (Ref C&F (Touching Trefoil) Voltage Drop) */
   private readonly vd_refCF_Trefoil_TP: CSARecord[] = [
      [1, 38],
      [1.5, 25],
      [2.5, 15],
      [4, 9.5],
      [6, 6.4],
      [10, 3.8],
      [16, 2.4],
      [25, 1.5],
      [35, 1.1],
      [50, 0.82],
      [70, 0.57],
      [95, 0.43],
      [120, 0.36],
      [150, 0.3],
      [185, 0.26],
      [240, 0.22],
      [300, 0.19],
      [400, 0.175],
      [500, 0.16],
      [630, 0.15],
      [800, 0.145],
      [1000, 0.14],
   ];
}
