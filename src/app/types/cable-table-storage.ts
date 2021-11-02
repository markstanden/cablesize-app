import { CableTable } from "./cable-table";
export interface CableTableStorage {
   getCCCTable(): CableTable;
   getVDTable(): CableTable;
}
