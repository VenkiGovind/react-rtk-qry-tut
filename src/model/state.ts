import { IncomingHttpStatusHeader } from "http2";
import { IMember, IMemberSubsData } from "./member";
import { IPlan } from "./subscription";
import { IAuth, IUserProfile } from "./user";


export interface IState {
  member?: IMember[] | [];
  memberSubs?: IMemberSubsData | undefined;
  plan?: IPlan[] | undefined;
  auth?: IAuth | undefined;
  userProfile?: IUserProfile | undefined;
  setMember?: (members: IMember[]) => void;
  setPlan?: (plans: IPlan[]) => void;
}


export const initState: IState = {
  member: [],
  memberSubs: undefined,
  plan: [],
  auth: undefined,
  userProfile: undefined,
  setMember: () => null,
  setPlan: () => null,
}