export function isValidEnumKey<ENUM>(
   enumObject: ENUM,
   testKey: string | number | symbol,
): testKey is keyof ENUM {
   if (!isNaN(Number(testKey))) {
      //Typescript does not allow numeric enum keys
      return false;
   }

   return testKey in enumObject;

   for (const key in enumObject) {
      if (key === testKey) {
         return true;
      }
   }

   return false;
}
