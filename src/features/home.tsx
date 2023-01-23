import { Router } from "@mui/icons-material"
import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { BannerCard } from "../components/banner-card";


export const Home = () => {

  const navigate = useNavigate();

  const clickHander = () => {
    navigate('/member');
  }

  return (
    <>
      <BannerCard/>

    </>
  )

}