import { VoltDrop } from "./../types/VoltDrop";
import { Cable } from "./Cable";
export abstract class SWA extends Cable {
   constructor(
      currentCarryingCapacity: number,
      crossSectionalSurfaceArea: number,
      voltdrop: VoltDrop,
   ) {
      super(
         currentCarryingCapacity,
         crossSectionalSurfaceArea,
         voltdrop,
      );
   }
}
