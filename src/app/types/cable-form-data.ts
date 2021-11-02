import { NOMINAL_VOLTAGE } from "./NominalVoltage";
import { REF_METHODS } from "./RefMethods";
import { CableType } from "./cable-type";
export type CableFormData = {
   "cable-type"?: keyof CableType;
   "installation-method"?: keyof typeof REF_METHODS;
   "length"?: number;
   "nominal-voltage"?: NOMINAL_VOLTAGE;
   "zdb"?: number;
   "ocpd-current"?: number;
   "load-current"?: number;
};
