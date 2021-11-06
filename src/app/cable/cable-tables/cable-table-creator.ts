import { CABLE_TYPE } from "./../../types/cable-type";
import { CableTableStore } from "./cable-table-store";
import { InstallationData } from "../../installation/installation-data";
import { Singles70CableTables } from "./singles70";
import { Flat70CableTables } from "./flat70";
import { SWA70CableTables } from "./swa70";
import { CableTableTemplate } from "./cable-table-template";
import { CableTableError } from "../../errors/cable-table-errors";

export class CableTableCreator {
   public static selector(
      installation: InstallationData,
   ): CableTableStore | Error {
      let cableTables: CableTableTemplate;
      switch (installation.cableType) {
         case CABLE_TYPE.SWA70:
            cableTables = new SWA70CableTables();
            break;
         case CABLE_TYPE.FLAT70:
            cableTables = new Flat70CableTables();
            break;
         case CABLE_TYPE.SINGLES70:
            cableTables = new Singles70CableTables();
            break;

         default:
            return new Error(
               CableTableError.InvalidFormData,
            );
      }
      return new CableTableStore(
         installation.refMethod,
         installation.nominalVoltage,
         cableTables,
      );
   }
}
