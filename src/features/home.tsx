import { Router } from "@mui/icons-material"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"


const style = {
  backgroundColor: 'lightGrey'
}
const style1 = {
  backgroundColor: 'lightGrey'
}

const style2= {
  backgroundColor: 'lightBlue'
}

const style3 = {
  backgroundColor: 'lightGreen'
}



export const Home = () => {

  const navigate = useNavigate();

  const clickHander = () => {
    navigate('/member');
  }

  return (
    <>
      <Container>
        <Box>
          <Typography>
            My Home
          </Typography>
          <Stack>
            <Button onClick={clickHander}>Go to Member Section</Button>
          </Stack>
        </Box>
      </Container>

    </>
  )

}