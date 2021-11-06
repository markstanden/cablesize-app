import { isValidEnumValue } from "../../lib/is-valid-enum-value";

describe("isValidEnumValue Tests", () => {
   enum TEST {
      ONE = "one",
      TWO = "Number2",
      THREE = 3,
   }

   test.only("Check valid enum values return true", () => {
      const valid = ["one", "Number2", 3];
      for (let item of valid) {
         expect(isValidEnumValue(TEST, item)).toBeTruthy();
      }
   });

   test.only("Check invalid enum values return false", () => {
      const valid = ["ONE", 2, "3"];
      for (let item of valid) {
         expect(isValidEnumValue(TEST, item)).toBeFalsy();
      }
   });
});
