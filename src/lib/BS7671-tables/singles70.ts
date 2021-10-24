import { CurrentCarryingCapacity } from "../../types/CurrentCarryingCapacity";

export namespace Singles70 {
   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 2 (Ref A, Single Phase) */
   export const ccc_refA_SP: CurrentCarryingCapacity = {
      1: 11,
      1.5: 14.5,
      2.5: 20,
      4: 26,
      6: 34,
      10: 46,
      16: 61,
      25: 80,
      35: 99,
      50: 119,
      70: 151,
      95: 182,
      120: 210,
      150: 240,
      185: 273,
      240: 321,
      300: 367,
   };

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 3 (Ref A, Three Phase) */
   export const ccc_refA_TP: CurrentCarryingCapacity = {
      1: 10.5,
      1.5: 13.5,
      2.5: 18,
      4: 24,
      6: 31,
      10: 42,
      16: 56,
      25: 73,
      35: 89,
      50: 108,
      70: 136,
      95: 164,
      120: 188,
      150: 216,
      185: 245,
      240: 286,
      300: 328,
   };

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 4 (Ref B, Single Phase) */
   export const ccc_refB_SP: CurrentCarryingCapacity = {
      1: 13.5,
      1.5: 17.5,
      2.5: 24,
      4: 32,
      6: 41,
      10: 57,
      16: 76,
      25: 101,
      35: 125,
      50: 151,
      70: 192,
      95: 232,
      120: 269,
      150: 300,
      185: 341,
      240: 400,
      300: 458,
      400: 546,
      500: 626,
      630: 720,
   };

   /** Current Carrying Capacity of the cable (in Amps) for each CSA (in mm2)
    * [Key: Cross-sectional Surface Area]:Current Carrying Capacity;
    * All values from Table 4D1A BS7671 Column 5 (Ref B, Three Phase) */
   export const ccc_refB_TP: CurrentCarryingCapacity = {
      1: 12,
      1.5: 15.5,
      2.5: 21,
      4: 28,
      6: 36,
      10: 50,
      16: 68,
      25: 89,
      35: 110,
      50: 134,
      70: 171,
      95: 207,
      120: 239,
      150: 262,
      185: 296,
      240: 346,
      300: 394,
      400: 467,
      500: 533,
      630: 611,
   };
}
