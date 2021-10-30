import { Singles70CableTables } from "./../../src/lib/cable/cable-tables/singles70";
import { Flat70CableTables } from "./../../src/lib/cable/cable-tables/flat70";
import { SWA70CableTables } from "./../../src/lib/cable/BS7671-tables/swa70";
import { Flat70CableCreator } from "./../../src/lib/cable/cable-creator/Flat70-cable-creator";
import { SWA70CableCreator } from "./../../src/lib/cable/cable-creator/SWA70-cable-creator";
import { InstallationData } from "./../../src/lib/installation/InstallationData";
import { Handler } from "@netlify/functions";
import { CableCreator } from "../../src/lib/cable/cable-creator/CableCreator";
import { CableTableClass } from "../../src/lib/cable/BS7671-tables/cable-tables";

export type HTMLFormObject = {
   [key: string]: FormDataEntryValue;
};

const handler: Handler = async (event, context) => {
   /* Get the seach params */
   const searchParams = new URLSearchParams(event.body);
   const paramsAsObj = paramsToObject(searchParams);
   const installation = new InstallationData(paramsAsObj);

   const cableCreator = getCableCreator(installation);

   console.log(cableCreator.getCurrentCarryingCapacity(10));
   /*
      We need to check the minimum size cable for volt drop,
      the minimum size for Zs, and the minimum size for current carrying capacity.
      And return the largest of the three
   */

   return {
      statusCode: 200,
      body: JSON.stringify({
         message: JSON.stringify(paramsAsObj, undefined, 3),
      }),
   };
};

function paramsToObject(
   entries: URLSearchParams,
): HTMLFormObject {
   const result = {};
   for (const [key, value] of entries) {
      result[key] = value;
   }
   return result;
}

function getCableCreator(installation: InstallationData) {
   let cableTables: CableTableClass;
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
   return new CableCreator(
      installation.refMethod,
      installation.nominalVoltage,
      cableTables,
   );
}

export { handler };
