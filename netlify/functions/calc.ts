import { CurrentCarryingCapacity } from "./../../src/app/lib/cable/ccc";
import { CableTableCreator } from "./../../src/app/lib/cable/cable-tables/cable-table-creator";
import { InstallationData } from "./../../src/app/lib/installation/InstallationData";
import { paramsToObject } from "../../src/app/lib/form/params-to-object";

import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
   /* Get the seach params */
   const searchParams = new URLSearchParams(event.body);
   const paramsAsObj = paramsToObject(searchParams);
   const installation = new InstallationData(paramsAsObj);

   /* Get the correct tables for the installation type */
   const cableTableStore =
      CableTableCreator.selector(installation);

   /*  */
   const ccc = new CurrentCarryingCapacity(cableTableStore);
   const minForOCPD = ccc.getMinCSA(
      installation.ocpdCurrent,
   );
   /*
      We need to check the minimum size cable for volt drop,
      the minimum size for Zs, and the minimum size for current carrying capacity.
      And return the largest of the three
   */

   return {
      statusCode: 200,
      body: JSON.stringify({
         message: `Minimum CSA for ${installation.ocpdCurrent}A breaker: ${minForOCPD}mm`,
      }),
   };
};

export { handler };
