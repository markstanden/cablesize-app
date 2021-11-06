import { paramsToObject } from "../../app/form/params-to-object";

describe("Testing paramsToObject() conversion of URLSearchParams to a JS object", () => {
   const paramString = "";
   const params = new URLSearchParams(paramString);

   test("Test valid params", () => {
      paramsToObject(params);
   });

   
});
