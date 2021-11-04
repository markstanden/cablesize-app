import { CableTableStore } from "./../../app/cable/cable-tables/cable-table-store";
import { CableTableError } from "./../../app/errors/cable-table-errors";
import { CurrentCarryingCapacity } from "../../app/cable/ccc";

describe("CCC Class Tests", () => {
   let c: CurrentCarryingCapacity;
   const tableStoreMock = {
      getCCCTable: () => [
         [1, 10],
         [2, 20],
         [3, 30],
      ],
   };

   beforeEach(() => {
      //runs before each test
      c = new CurrentCarryingCapacity(
         tableStoreMock as CableTableStore,
      );
   });

   test("Check MinCSA Method returns next record if current max exceeded.", () => {
      expect(c.getMinCSA(10)).toBe(1);
      expect(c.getMinCSA(10.1)).toBe(2);
      expect(c.getMinCSA(20)).toBe(2);
      expect(c.getMinCSA(20.9)).toBe(3);
      expect(c.getMinCSA(30)).toBe(3);
   });

   test("Check MinCSA Method returns out of scope error if required current exceeds data within tables", () => {
      expect(() => {
         c.getMinCSA(30.1);
      }).toThrowError(
         CableTableError.OutOfApplicationScope,
      );
   });

   test("Invalid Store", () => {
      expect(() => {
         new CurrentCarryingCapacity({} as CableTableStore);
      }).toThrowError(CableTableError.InvalidStore);
   });
});
