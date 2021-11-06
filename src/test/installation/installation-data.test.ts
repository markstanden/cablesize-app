import { CABLE_PARAMS } from "./../../app/types/cable-params";
import { CableTableError } from "./../../app/errors/cable-table-errors";
import { InstallationData } from "./../../app/installation/installation-data";
describe("installationData Tests", () => {
   let formDataMock: URLSearchParams;

   beforeAll(() => {
      //runs before all tests
   });

   beforeEach(() => {
      //runs before each test
      formDataMock = new URLSearchParams();
   });

   test.todo(
      "Check supplied fields are set to instance variables correctly.",
   );

   test("Check non zero defaults are present for empty fields", () => {
      const data = new InstallationData(formDataMock);
      expect(data.cableType).not.toBeFalsy();
      expect(data.length).not.toBeFalsy();
      expect(data.loadCurrent).not.toBeFalsy();
      expect(data.nominalVoltage).not.toBeFalsy();
      expect(data.ocpdCurrent).not.toBeFalsy();
      expect(data.refMethod).not.toBeFalsy();
      expect(data.zdb).not.toBeFalsy();
   });

   test("Test invalid form data (cable-type) throws error", () => {
      formDataMock.set(
         CABLE_PARAMS.CABLE_TYPE,
         "Test" as any,
      );
      expect(() => {
         new InstallationData(formDataMock);
      }).toThrowError(CableTableError.InvalidFormData);
   });

   test("Test invalid form data (installation-type) throws error", () => {
      formDataMock.set(
         CABLE_PARAMS.REF_METHOD,
         "Test" as any,
      );
      expect(() => {
         new InstallationData(formDataMock);
      }).toThrowError(CableTableError.InvalidFormData);
   });

   test("Test invalid form data (Nominal Voltage) throws error", () => {
      formDataMock.set(
         CABLE_PARAMS.NOMINAL_VOLTAGE,
         "Test" as any,
      );
      expect(() => {
         new InstallationData(formDataMock);
      }).toThrowError(CableTableError.InvalidFormData);
   });

   test("Test invalid form data (length) throws error", () => {
      formDataMock.set(CABLE_PARAMS.LENGTH, "Test" as any);
      expect(() => {
         new InstallationData(formDataMock);
      }).toThrowError(CableTableError.InvalidFormData);
   });

   test("Test invalid form data (Zdb) throws error", () => {
      formDataMock.set(CABLE_PARAMS.ZDB, "Test" as any);
      expect(() => {
         new InstallationData(formDataMock);
      }).toThrowError(CableTableError.InvalidFormData);
   });
});
