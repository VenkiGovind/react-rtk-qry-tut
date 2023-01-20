import { createContext } from "react";
import { IMember, IMemberSubsData } from '../member';
import { initState, IState } from "../state";
import { ISubscription } from "../subscription";



const AppCnxt = createContext<IState>(initState);


export {
  AppCnxt
};