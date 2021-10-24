import { VoltDrop } from "./../types/VoltDrop";
export abstract class Cable {
   constructor(
      protected _currentCarryingCapacity: number,
      protected _crossSectionalSurfaceArea: number,
      protected _voltDrop: VoltDrop,
   ) {}
}
