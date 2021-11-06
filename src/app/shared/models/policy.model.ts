import { PolicyType } from "@shared/types/policy-type.type";
import { IconType } from "@shared/types/icon.type";


export interface Policy {
  name: string;
  DisplayName: string;
  description: string;
  icon: string | IconType;
  type: PolicyType;
}
