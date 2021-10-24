import { CableData } from "./../../src/lib/CableData";
import { CableFormData } from "./../../src/types/cableFormData";
import { Handler } from "@netlify/functions";

export type HTMLFormObject = {
   [key: string]: FormDataEntryValue;
};

const handler: Handler = async (event, context) => {
   /* Get the seach params */
   const searchParams = new URLSearchParams(event.body);
   const paramsAsObj = paramsToObject(searchParams);
   const cableData: CableFormData = new CableData(
      paramsAsObj,
   );

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

export { handler };
