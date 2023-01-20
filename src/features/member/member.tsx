import { Box, Button, Stack, Container, Grid, Typography, Paper } from "@mui/material";
import { useEffect, useState, useReducer, useContext } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import { UnorderedList } from "../../components/unordered-list";
import { ManageAccounts } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import { MemberDetails } from "./member-detalis";
import { IMember, IMemberSubsData } from "../../model/member";
import { MemberContext, MemberSubsCnxt } from "../../model/context/member.provider";
import { AppCnxt } from "../../model/context/stateContext";

const style = {
  marginTop: '1.5rem',
  height: 700
}
const style1 = {
  backgroundColor: 'lightGrey'

}

const style2 = {
  backgroundColor: 'lightBlue'
}

const style3 = {
  backgroundColor: 'lightGreen'
}



export const MemberList = (props: {member: IMember[]}) => {

  const { member } = props;

  const [plan, setPlan] = useState<IMember[]>([]);
  //const { member } = useContext(AppCnxt);

  const [selectedMember, setSelectedMember] = useState<IMember | undefined>();

  const dummyMembSubsData: IMemberSubsData = {
    member: selectedMember,
    subscription: {
      id: 1,
      name: 'High Deductible Plan',
      subscriptionCode: 'HDP001A'
    }
  }

  const counter = 0;

  return (
    <Container>
      <Box>

        <Grid style={style} container spacing={2}>
          <Grid style={style1} item md={2} xs={12}>asdfasdf</Grid>
          <Grid style={style2} item md={8} xs={12}>
            <Stack>
              <Typography component={'div'}><h2>List Members</h2></Typography>
              <List>
                {
                  member!.map((item, index) => {
                    return (
                      <ListItem key={index} onClick={() => {
                        setSelectedMember(item);
                      }}>
                        <ListItemAvatar >
                          <Avatar>
                            <ManageAccounts />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.firstName + " " + item.lastName} secondary={item.memberCode} />
                      </ListItem>
                    )
                  })
                }
              </List>
            </Stack>
          </Grid>
          <Grid style={style3} item md={2} xs={12}>

            {
              member &&
              <Box>
                <Stack>
                  <Typography>Selected Member is:</Typography>
                  <MemberContext.Provider value={selectedMember}>
                    <MemberDetails />
                  </MemberContext.Provider>

                  <Outlet context={member} />
                </Stack>

              </Box>
            }
          </Grid>
        </Grid>
      </Box>

    </Container>
  )
}

const Addition = (numA: number, numB: number): number => {

  let result: number = numA + numB;
  return result;

}


class MyMath {

  Addition(numA: number, numB: number): number {

    let result: number = numA + numB;
    return result;

  }

  Subtraction(numA: number, numB: number): number {

    let result: number = numA - numB;
    return result;
  }
}


