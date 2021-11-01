import { NOMINAL_VOLTAGE } from "../../types/NominalVoltage";
import { REF_METHODS } from "../../types/RefMethods";
import { CableTableTemplate } from "./cable-table-template";
import { CSARecord } from "../../types/csa-record";

export class Flat70CableTables implements CableTableTemplate {
   public getCCCTable(
      nominalVoltage: NOMINAL_VOLTAGE,
      refMethod: keyof typeof REF_METHODS,
   ): CSARecord[] | null {
      switch (nominalVoltage) {
         case "230V":
            switch (refMethod) {
               case "A":
                  return this.ccc_refA;
               case "C":
                  return this.ccc_refC;
               case "100":
                  return this.ccc_ref100;
               case "101":
                  return this.ccc_ref101;
               case "102":
                  return this.ccc_ref102;
               case "103":
                  return this.ccc_ref103;
               default:
                  return null;
            }
         case "400V":
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
               case "C":
               case "D":
               case "EF":
                  return this.voltDrop;
               default:
                  return null;
            }
         case "400V":
         default:
            return null;
      }
   }
   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Current Carrying Capacity];
    * All values from Table 4D5 BS7671 Column 2 (Ref 100, Single Phase) */
   private readonly ccc_ref100: CSARecord[] = [
      [1, 13],
      [1.5, 16],
      [2.5, 21],
      [4, 27],
      [6, 34],
      [10, 45],
      [16, 57],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Current Carrying Capacity];
    * All values from Table 4D5 BS7671 Column 3 (Ref 101, Single Phase) */
   private readonly ccc_ref101: CSARecord[] = [
      [1, 10.5],
      [1.5, 13],
      [2.5, 17],
      [4, 22],
      [6, 27],
      [10, 36],
      [16, 46],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Current Carrying Capacity];
    * All values from Table 4D5 BS7671 Column 4 (Ref 102, Single Phase) */
   private readonly ccc_ref102: CSARecord[] = [
      [1, 13],
      [1.5, 16],
      [2.5, 21],
      [4, 27],
      [6, 35],
      [10, 47],
      [16, 63],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Current Carrying Capacity];
    * All values from Table 4D5 BS7671 Column 5 (Ref 103, Single Phase) */
   private readonly ccc_ref103: CSARecord[] = [
      [1, 8],
      [1.5, 10],
      [2.5, 13.5],
      [4, 18.5],
      [6, 23.5],
      [10, 32],
      [16, 42.5],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Current Carrying Capacity];
    * All values from Table 4D5 BS7671 Column 6 (Ref C, Single Phase) */
   private readonly ccc_refC: CSARecord[] = [
      [1, 16],
      [1.5, 20],
      [2.5, 27],
      [4, 37],
      [6, 47],
      [10, 64],
      [16, 85],
   ];

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Current Carrying Capacity];
    * All values from Table 4D5 BS7671 Column 7 (Ref A, Single Phase) */
   private readonly ccc_refA: CSARecord[] = [
      [1, 11.5],
      [1.5, 14.5],
      [2.5, 20],
      [4, 26],
      [6, 32],
      [10, 44],
      [16, 57],
   ];

   /** Volt drop of the cable (in mV/A/m) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area, Value:Volt Drop per ampere, per metre];
    * All values from Table 4D5 BS7671 Column 8 (Voltage Drop) */
   private readonly voltDrop: CSARecord[] = [
      [1, 44],
      [1.5, 29],
      [2.5, 18],
      [4, 11],
      [6, 7.3],
      [10, 4.4],
      [16, 2.8],
   ];
}
