import { CurrentCarryingCapacity } from "./../../src/app/cable/ccc";
import { CableTableCreator } from "./../../src/app/cable/cable-tables/cable-table-creator";
import { InstallationData } from "../../src/app/installation/installation-data";
import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
   /* Get the seach params */
   let installation: InstallationData;
   console.log(event.body);
   try {
      installation = new InstallationData(
         new URLSearchParams(event.body),
      );
   } catch (error) {
      return {
         statusCode: 422,
         body: JSON.stringify({
            message: `Invalid request data received.`,
         }),
      };
   }

   /* Get the correct tables for the installation type */
   const cableTableStore =
      CableTableCreator.selector(installation);
   if (cableTableStore instanceof Error) {
      return {
         statusCode: 422,
         body: JSON.stringify({
            message: cableTableStore.message,
         }),
      };
   }
   /*
      We need to check the minimum size cable for volt drop,
      the minimum size for Zs, and the minimum size for current carrying capacity.
      And return the largest cable of the three
   */
   const ccc = new CurrentCarryingCapacity(cableTableStore);
   const minForOCPD = ccc.getMinCSA(
      installation.ocpdCurrent,
   );

   return {
      statusCode: 200,
      body: JSON.stringify({
         message: `
         Minimum CSA for ${installation.ocpdCurrent}A breaker: ${minForOCPD}mm
         `,
      }),
   };
};

export { handler };
