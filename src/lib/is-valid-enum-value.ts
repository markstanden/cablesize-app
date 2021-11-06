export function isValidEnumValue<ENUM>(
   enumObject: ENUM,
   testValue: any,
): testValue is ENUM[keyof ENUM] {
   for (const key in enumObject) {
      if (enumObject[key] === testValue) {
         return true;
      }
   }

   return false;
}
