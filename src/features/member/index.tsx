import { Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import App from "../../App"
import { AppCnxt } from "../../model/context/stateContext"
import { IMember } from "../../model/member";
import { MemberList } from "./member"
import { useFetchMembersQuery } from "./+state/member-api-slice";

export const MemberHome = () => {
  const MemberData = [{ "id": 1, "memberCode": "AA0001230012", "firstName": "Venkatesh", "lastName": "Govind", "dob": "1978-10-12T05:00:00.000Z" }, { "id": 2, "memberCode": "AA0001230013", "firstName": "John", "lastName": "Doe", "dob": "1962-07-04T05:00:00.000Z" }, { "id": 3, "memberCode": "AA0001230017", "firstName": "Jane", "lastName": "Doe", "dob": "1982-02-18T06:00:00.000Z" }, { "id": 4, "memberCode": "AA0001230014", "firstName": "Judy", "lastName": "Foster", "dob": "1982-02-18T06:00:00.000Z" }, { "id": 5, "memberCode": "AA0001230015", "firstName": "Karthik", "lastName": "Konda", "dob": "1982-02-18T06:00:00.000Z" }, { "id": 6, "memberCode": "AA0001230016", "firstName": "Ricardo", "lastName": "Figueroa", "dob": "1982-02-18T06:00:00.000Z" }, { "id": 7, "memberCode": "AA0001230018", "firstName": "Armando", "lastName": "Saurez", "dob": "1982-02-18T06:00:00.000Z" }, { "id": 8, "memberCode": "AA0001230023", "firstName": "Eric", "lastName": "Budah", "dob": "1981-06-19T05:00:00.000Z" }, { "id": 9, "memberCode": "AA0001230032", "firstName": "Bruce", "lastName": "Wayne", "dob": "1978-10-12T05:00:00.000Z" }];

  // Using the RTK Query based service:
  const { data = [], isFetching, refetch } = useFetchMembersQuery();


  return (
    <>
      <Button onClick={() => {
        refetch();
      }}>Fetch members</Button>
      {
        isFetching ? <Typography variant="h3">Loading...</Typography>
          :
          <MemberList member={data} />
      }
    </>
  )
}