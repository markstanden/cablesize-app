import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
   console.log(event.queryStringParameters);
   return {
      statusCode: 200,
      body: JSON.stringify({ message: "Slap a 10mm in" }),
   };
};

export { handler };
