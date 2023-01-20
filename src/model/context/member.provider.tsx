import { createContext } from "react";
import { IMember, IMemberSubsData } from '../member';
import { ISubscription } from "../subscription";



const MemberContext = createContext<IMember | undefined>(undefined);
const MemberSubsCnxt = createContext<IMemberSubsData | undefined>(undefined);


export {
  MemberContext,
  MemberSubsCnxt
};