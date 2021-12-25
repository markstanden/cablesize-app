export function isValidEnumKey<ENUM>(
   enumObject: ENUM,
   testKey: string | number | symbol | null,
): testKey is keyof ENUM {
   if (testKey === null) {
      return false;
   }

   if (!isNaN(Number(testKey))) {
      //Typescript does not allow numeric enum keys
      return false;
   }

   return testKey in enumObject;
}
