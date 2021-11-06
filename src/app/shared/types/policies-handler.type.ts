import { BehaviorSubject } from "rxjs";
import { PolicyType } from "./policy-type.type";

export type PoliciesHandler = {
    [key in PolicyType]?: BehaviorSubject<boolean>;
};