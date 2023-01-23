import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PrimarySearchAppBar from "../components/app-bar-search";
import { Grid, Container } from "@mui/material";
import { PrimaryNav } from "../components/primary-nav";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


let theme = createTheme({
  palette: {
    primary: {
      main: '#6C56AF',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export const Layout = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <PrimarySearchAppBar />
        <Grid container spacing={3} sx={{mt: 1}}>
          <Grid item xs>
            <Container sx={{ ml: -1 }}>
              <Card sx={{ minWidth: 275, backgroundColor: "#f5f6fa" }} elevation={0}>
                <CardContent>
                  <Typography sx={{fontWeight: 600}} variant="h6" component="div">
                    Indus Group Insurance
                  </Typography>
                  <Typography sx={{ mt: 1 }}>
                    Commission Q3
                    <Typography sx={{
                      ml: 2,
                      fontWeight: 600
                    }} component="span">
                      $12,654.00
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Manage</Button>
                </CardActions>
              </Card>
            </Container>
            <PrimaryNav />
          </Grid>
          <Grid item xs={6} >
            <Outlet />
          </Grid>
          <Grid item xs>
            <Item>xs</Item>
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>

  )
};