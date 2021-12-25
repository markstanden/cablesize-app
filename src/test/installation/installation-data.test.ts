import { NOMINAL_VOLTAGE } from "./../../app/types/nominal-voltage";
import { CABLE_TYPE } from "./../../app/types/cable-type";
import { CABLE_PARAMS } from "./../../app/types/cable-params";
import { CableTableError } from "./../../app/errors/cable-table-errors";
import { InstallationData } from "./../../app/installation/installation-data";
describe("installationData Tests", () => {
   let formDataMock: URLSearchParams;
   let initString: string;

   beforeAll(() => {
      //runs before all tests
   });

   beforeEach(() => {
      //runs before each test
      initString =
         "cable-type=swa70&ref-method=D&length=10&nominal-voltage=230V&zdb=10&ocpd-current=120&load-current=10";
      //cable-type=singles70&length=10&nominal-voltage=400V&zdb=1&ocpd-current=16&load-current=10
      formDataMock = new URLSearchParams(initString);
   });

   test("Check supplied fields are set to instance variables correctly.", () => {
      const data = new InstallationData(formDataMock);
      expect(data.cableType).toBe(CABLE_TYPE.SWA70);
      expect(data.length).toBe(10);
      expect(data.loadCurrent).toBe(10);
      expect(data.nominalVoltage).toBe(NOMINAL_VOLTAGE.SP);
      expect(data.ocpdCurrent).toBe(120);
      expect(data.refMethod).toBe("D");
      expect(data.zdb).toBe(10);
   });

   test("Check non zero defaults are present for empty fields", () => {
      const data = new InstallationData(
         new URLSearchParams(),
      );
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

   test("Test invalid form data (ocpd) throws error", () => {
      formDataMock.set(
         CABLE_PARAMS.OCPD_CURRENT,
         "Test" as any,
      );
      expect(() => {
         new InstallationData(formDataMock);
      }).toThrowError(CableTableError.InvalidFormData);
   });

   test("Test invalid form data (load) throws error", () => {
      formDataMock.set(
         CABLE_PARAMS.LOAD_CURRENT,
         "Test" as any,
      );
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
