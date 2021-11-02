import { errorInvalidRefMethodForCableType } from "./../../app/errors/cable-table-errors";
import { Flat70CableTables } from "../../app/cable/cable-tables/flat70";
import { SWA70CableTables } from "../../app/cable/cable-tables/swa70";
import { CableTableStore } from "../../app/cable/cable-tables/cable-table-store";
import { CurrentCarryingCapacity } from "../../app/cable/ccc";

describe("CCC Class Tests", () => {
   beforeAll(() => {
      //runs before all tests
   });

   beforeEach(() => {
      //runs before each test
   });

   test("Ducted SWA", () => {
      const ccc = new CurrentCarryingCapacity(
         new CableTableStore(
            "D",
            "400V",
            new SWA70CableTables(),
         ),
      );
      expect(ccc.getMinCSA(10)).toBe(1.5);
      expect(ccc.getMinCSA(32)).toBe(6);
      expect(ccc.getMinCSA(63)).toBe(16);
   });

   test("Twin", () => {
      const ccc = new CurrentCarryingCapacity(
         new CableTableStore(
            "100",
            "230V",
            new Flat70CableTables(),
         ),
      );
      expect(ccc.getMinCSA(10)).toBe(1);
      expect(ccc.getMinCSA(20)).toBe(2.5);
      expect(ccc.getMinCSA(32)).toBe(6);
   });

   test("Invalid Store", () => {
      try {
         new CurrentCarryingCapacity(
            new CableTableStore(
               "D",
               "230V",
               new Flat70CableTables(),
            ),
         );
      } catch (error) {
         expect(error).toBeInstanceOf(Error);
         expect(error).toHaveProperty(
            "message",
            errorInvalidRefMethodForCableType.message,
         );
      }
   });
});
