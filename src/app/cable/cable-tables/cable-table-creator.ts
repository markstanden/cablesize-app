import { CableTableStore } from "./cable-table-store";
import { InstallationData } from "../../installation/installation-data";
import { Singles70CableTables } from "./singles70";
import { Flat70CableTables } from "./flat70";
import { SWA70CableTables } from "./swa70";
import { CableTableTemplate } from "./cable-table-template";
export class CableTableCreator {
   public static selector(installation: InstallationData) {
      let cableTables: CableTableTemplate;
      switch (installation.cableType) {
         case "swa70":
            cableTables = new SWA70CableTables();
            break;
         case "flat70":
            cableTables = new Flat70CableTables();
            break;
         case "singles70":
            cableTables = new Singles70CableTables();
            break;

         default:
            throw new Error("Invalid Cable Type");
      }
      return new CableTableStore(
         installation.refMethod,
         installation.nominalVoltage,
         cableTables,
      );
   }
}
