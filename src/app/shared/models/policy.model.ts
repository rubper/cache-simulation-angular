import { PolicyType } from "@shared/types/policy-type.type";

export interface Policy {
  name: string;
  description: string;
  icon: string;
  type: PolicyType;
}
