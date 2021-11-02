import { InstallationData } from "./../../app/installation/installation-data";
describe("installationData Tests", () => {
   beforeAll(() => {
      //runs before all tests
   });

   beforeEach(() => {
      //runs before each test
   });

   test("Check non zero defaults are present", () => {
      const data = new InstallationData({});
      expect(data.cableType).not.toBeFalsy();
      expect(data.length).not.toBeFalsy();
      expect(data.loadCurrent).not.toBeFalsy();
      expect(data.nominalVoltage).not.toBeFalsy();
      expect(data.ocpdCurrent).not.toBeFalsy();
      expect(data.refMethod).not.toBeFalsy();
      expect(data.zdb).not.toBeFalsy();
   });
});
