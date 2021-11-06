import { PolicyType } from "@shared/types/policy-type.type";
import { Policy } from "./policy.model";

export interface PolicyGroup {
  name: PolicyType;
  policies: Policy[];
}
