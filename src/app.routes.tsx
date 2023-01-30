
import { RouteObject } from "react-router-dom";
import { AppCnxt } from "./model/context/stateContext";
import { Home } from './features/home';
import { Layout } from "./features/layout";
import { MemberHome } from "./features/member";
import { MemberList } from './features/member/member';
import { RoutedMemberDetails } from "./features/member/route-member-details";
import { PageNotFound } from "./features/page-not-found";
import { PostHome } from "./features/posts/posts-home";
import { PlanHome } from "./features/insurance-plan/plan-home";

export const appRoutes: RouteObject = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Home/>
    },
    {
      path: 'home',
      element: <Home/>
    },
    {
      path: 'post',
      element: <PostHome/>
    },
    {
      path: 'plan',
      element: <PlanHome/>
    },
    {
      path: 'member',
      element: <MemberHome />,
      children: [
        {
          path: ':memberCd',
          element: <RoutedMemberDetails/>
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound/>
    }
  ]
}