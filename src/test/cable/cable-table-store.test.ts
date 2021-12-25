import { CableTableError } from "./../../app/errors/cable-table-errors";
import { NOMINAL_VOLTAGE } from "./../../app/types/nominal-voltage";
import { REF_METHODS } from "./../../app/types/ref-methods";
import { CableTableStore } from "./../../app/cable/cable-tables/cable-table-store";

describe("Testing cabletable storage", () => {
   const testTable = [
      [7, 70],
      [6, 60],
      [5, 50],
      [4, 40],
      [3, 30],
      [2, 20],
      [1, 10],
   ];
   const store = new CableTableStore(
      REF_METHODS.REF_A,
      NOMINAL_VOLTAGE.SP,
      {
         getCCCTable: (nom: any, ref: any) => {
            nom == ref;
            return testTable;
         },
         getVDTable: (nom: any, ref: any) => {
            nom == ref;
            return testTable;
         },
      } as any,
   );

   it("Tests that a full table is returned", () => {
      expect(store.getSortedCCCTable()).toHaveLength(7);
      expect(store.getSortedVDTable()).toHaveLength(7);
   });

   it("Tests that cloned tables are returned", () => {
      expect(store.getSortedCCCTable()).not.toBe(
         store.getSortedVDTable(),
      );
      expect(store.getSortedCCCTable()).not.toBe(testTable);
      expect(store.getSortedVDTable()).not.toBe(testTable);
   });
   it("Tests that CCC table is returned sorted", () => {
      expect(store.getSortedCCCTable()[0][1]).toBe(10);
      expect(store.getSortedCCCTable()[1][1]).toBe(20);
      expect(store.getSortedCCCTable()[2][1]).toBe(30);
      expect(store.getSortedCCCTable()[3][1]).toBe(40);
      expect(store.getSortedCCCTable()[4][1]).toBe(50);
   });

   it("Tests that VD table is returned sorted", () => {
      expect(store.getSortedVDTable()[0][1]).toBe(10);
      expect(store.getSortedVDTable()[1][1]).toBe(20);
      expect(store.getSortedVDTable()[2][1]).toBe(30);
      expect(store.getSortedVDTable()[3][1]).toBe(40);
      expect(store.getSortedVDTable()[4][1]).toBe(50);
   });

   it("Checks an error is thrown for an invalid table", () => {
      expect(() => {
         new CableTableStore(
            REF_METHODS.REF_A,
            NOMINAL_VOLTAGE.SP,
            {
               getCCCTable: (nom: any, ref: any) => {
                  nom == ref;
                  return new Error();
               },
               getVDTable: (nom: any, ref: any) => {
                  nom == ref;
                  return new Error();
               },
            } as any,
         );
      }).toThrowError(
         CableTableError.InvalidRefMethodForCableType,
      );
   });
});
