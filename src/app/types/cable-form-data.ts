import { NOMINAL_VOLTAGE } from "./nominal-voltage";
import { REF_METHODS } from "./ref-methods";
import { CABLE_TYPE } from "./cable-type";
export type CableFormData = {
   "cable-type"?: CABLE_TYPE;
   "installation-method"?: REF_METHODS;
   "length"?: number;
   "nominal-voltage"?: NOMINAL_VOLTAGE;
   "zdb"?: number;
   "ocpd-current"?: number;
   "load-current"?: number;
};
