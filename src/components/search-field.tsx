
import { styled } from '@mui/system'

export const SearchField = styled('input')({
  height: 22,
  border: '1px solid blue',
  "&:hover": {
    height: 23,
    boxShadow: '0 0 5px blue'
  }
})