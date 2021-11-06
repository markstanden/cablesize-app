import { isValidEnumKey } from "../../lib/is-valid-enum-key";

describe("isValidEnumKey Tests", () => {
   enum TEST {
      ONE = "one",
      TWO = "Number2",
      THREE = 3,
   }
   test("Check valid enum keys return true", () => {
      const valid = ["ONE", "TWO", "THREE"];
      for (let item of valid) {
         expect(isValidEnumKey(TEST, item)).toBeTruthy();
      }
   });
   test("Check valid enum values return false", () => {
      expect(isValidEnumKey(TEST, "one")).toBeFalsy();
      expect(isValidEnumKey(TEST, "Number2")).toBeFalsy();
      expect(isValidEnumKey(TEST, 3)).toBeFalsy();
   });

   test("Check invalid enum keys return false", () => {
      const valid = ["One", 1, 2];
      for (let item of valid) {
         expect(isValidEnumKey(TEST, item)).toBeFalsy();
      }
   });
   test("Check for reversed numeric enum keys returning false positive", () => {
      const valid = ["1", "2", "3"];
      for (let item of valid) {
         expect(isValidEnumKey(TEST, item)).toBeFalsy();
      }
   });
});
