import { PolicyType } from "@shared/types/policy-type.type";

export interface NavLink {
    name: PolicyType;
    title: string;
    description?: string;
    subLinks: SubLink[];
}

export interface SubLink {
    name: string;
    title: string;
}