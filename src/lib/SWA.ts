import { Cable } from "./Cable";
export class SWA extends Cable {
   constructor(
      currentCarryingCapacity: number,
      CrossSectionalSurfaceArea: number,
   ) {
      super(
         currentCarryingCapacity,
         CrossSectionalSurfaceArea,
      );
   }
}
