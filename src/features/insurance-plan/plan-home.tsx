import { Avatar, Box, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/system"
import React, { useEffect, useState } from "react";
import { SearchField } from "../../components/search-field"
import { IPlan, useFetchPlanByIdQuery, useFetchPlansQuery  } from "./+state/plan-api-slice";
import MedicationIcon from '@mui/icons-material/Medication';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ContainerBar } from "../../components/container-bar";

export const PlanHome = () => {

  const [planId, setPlanId] = useState(0);

  const { data: plans, isFetching: fetchingPlans, refetch } = useFetchPlansQuery();
  const { data: plan, isFetching: fetchingPlan } = useFetchPlanByIdQuery(planId);

  const highlight = {
    border: '4px solid green'
  }
  
  return (
    <>
      <CssBaseline />      
      <Box sx={{ flexGrow: 1 }}>
      <ContainerBar>
      <IconButton aria-label="delete" size="large">
        <AddCircleOutlineIcon fontSize="inherit" titleAccess="Add Post" />
      </IconButton>
      </ContainerBar>
        <Container sx={{ mt: 5 }}>
          <Typography variant="h3">
            Plans
          </Typography>
        </Container>
        <Container sx={{ mt: 1 }}>
          Enter Plan ID to fetch: &nbsp;
          <SearchField onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPlanId(Number(e.target.value));
          }}></SearchField>
        
        </Container>
        <Container sx={{ mt: 2 }}>
          
          <List>
            {
              plans?.map((planIter: IPlan, index: number) => {
                return <ListItem key={planIter.id} style={plan?.id === planIter.id ? highlight : {}}>
                  <ListItemAvatar>
                    <Avatar>
                      <MedicationIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          fontWeight={600}
                          variant="body2"
                          color="text.primary"
                        >
                          {planIter.id}
                        </Typography>
                      </>
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          fontWeight={600}
                          variant="body2"
                          color="text.primary"
                        >
                          {planIter.planName}
                        </Typography>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {planIter.description}
                        </Typography>
                      </>
                    } />
                </ListItem>
              })

            }
          </List>
        </Container>
      </Box>
    </>
  )
}