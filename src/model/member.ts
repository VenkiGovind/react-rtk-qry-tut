import { ISubscription } from "./subscription";

export interface IMember {
  id?: number,
  memberCode: string;
  firstName: string;
  lastName: string;
  dob?: string;
}


export interface IMemberSubsData {
  member: IMember | undefined;
  subscription: ISubscription;
}