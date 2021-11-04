import { CableFormData } from "./../../app/types/cable-form-data";
import { CableTableError } from "./../../app/errors/cable-table-errors";
import { InstallationData } from "./../../app/installation/installation-data";
describe("installationData Tests", () => {
   let formDataStub: CableFormData;

   beforeAll(() => {
      //runs before all tests
   });

   beforeEach(() => {
      //runs before each test
      formDataStub = {};
   });

   test.todo(
      "Check supplied fields are set to instance variables correctly.",
   );

   test("Check non zero defaults are present for empty fields", () => {
      const data = new InstallationData({});
      expect(data.cableType).not.toBeFalsy();
      expect(data.length).not.toBeFalsy();
      expect(data.loadCurrent).not.toBeFalsy();
      expect(data.nominalVoltage).not.toBeFalsy();
      expect(data.ocpdCurrent).not.toBeFalsy();
      expect(data.refMethod).not.toBeFalsy();
      expect(data.zdb).not.toBeFalsy();
   });

   test("Test invalid form data (cable-type) throws error", () => {
      formDataStub["cable-type"] = "Test" as any;
      expect(() => {
         new InstallationData(formDataStub);
      }).toThrowError(CableTableError.InvalidFormData);
   });

   test("Test invalid form data (installation-type) throws error", () => {
      formDataStub["installation-method"] = "Test" as any;
      expect(() => {
         new InstallationData(formDataStub);
      }).toThrowError(CableTableError.InvalidFormData);
   });

   test("Test invalid form data (length) throws error", () => {
      formDataStub.length = "Test" as any;
      expect(() => {
         new InstallationData(formDataStub);
      }).toThrowError(CableTableError.InvalidFormData);
   });
   test("Test invalid form data (Zdb) throws error", () => {
      formDataStub.zdb = "Test" as any;
      expect(() => {
         new InstallationData(formDataStub);
      }).toThrowError(CableTableError.InvalidFormData);
   });
     test("Test invalid form data (Nominal Voltage) throws error", () => {
        formDataStub["nominal-voltage"] = "Test" as any;
        expect(() => {
           new InstallationData(formDataStub);
        }).toThrowError(CableTableError.InvalidFormData);
     });
});
