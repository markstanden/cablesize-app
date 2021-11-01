import { InstallationData } from './../../src/app/lib/installation/InstallationData';

import { Handler } from "@netlify/functions";
import { paramsToObject } from "../../src/app/lib/netlify";


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


export { handler };
