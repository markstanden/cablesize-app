import { HTMLFormObject } from "./../types/cable-form-object";
export function paramsToObject(
   entries: URLSearchParams,
): HTMLFormObject {
   const result: HTMLFormObject = {};
   for (const [key, value] of entries) {
      result[key] = value;
   }
   return result;
}
