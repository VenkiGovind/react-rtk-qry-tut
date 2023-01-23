import { Container } from "@mui/material"
import React from "react"


export interface IContainerBarProps {
  children: React.ReactNode
}

export const ContainerBar = (props: IContainerBarProps) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}
    >
      {
        props.children
      }
    </Container>
  )
}