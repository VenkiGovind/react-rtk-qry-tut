import { Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import { ImplementationLocation } from "typescript"
import { MemberContext, MemberSubsCnxt } from "../../model/context/member.provider"
import { AppCnxt } from "../../model/context/stateContext"
import { IMember } from "../../model/member"
import { MemberName } from "./memberName"

export const RoutedMemberDetails = () => {
  const routeParam = useParams();
  const member = useOutletContext<IMember[]>();

  const [filteredMember, setFilteredMember] = useState<IMember>();

  useEffect(() => {
    const memberItem = member.find((item: IMember) => item.memberCode === routeParam.memberCd);
    setFilteredMember(memberItem);
  
  }, [member]);

  return (
    <Stack>
      {
        routeParam && 
        <>
          <h4>Routed Member Details:</h4>
          <Typography>{routeParam.memberCd}</Typography>
          <Typography>{filteredMember?.firstName}</Typography>
          <Typography>{filteredMember?.lastName}</Typography>
          
        </>
      }

    </Stack>
  )
}