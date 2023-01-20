import { Stack, Typography } from "@mui/material"
import { useContext } from "react"
import { ImplementationLocation } from "typescript"
import { MemberContext, MemberSubsCnxt } from "../../model/context/member.provider"
import { IMember } from "../../model/member"
import { MemberName } from "./memberName"

export const MemberDetails = () => {

  const memberCnxt = useContext(MemberContext)

  return (
    <Stack>
      {
        memberCnxt && 
        <>
          <MemberName/>
          <Typography>{memberCnxt?.firstName}</Typography>
          <Typography>{memberCnxt?.lastName}</Typography>
          
        </>
      }

    </Stack>
  )
}