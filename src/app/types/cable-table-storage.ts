import { CableTable } from "./cable-table";
export interface CableTableStorage {
   getSortedCCCTable(): CableTable;
   getSortedVDTable(): CableTable;
}
