import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/system"
import { useEffect, useState } from "react";
import { SearchField } from "../../components/search-field"
import { IPost, useFetchPostQuery, useFetchPostsQuery } from "./+state/post-api-slice";
import CommentIcon from '@mui/icons-material/Comment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ContainerBar } from "../../components/container-bar";


export const PostHome = () => {
  const [postId, setPostId] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState<IPost[] | undefined>([]);
  // const { data: post, isFetching: isLoadnigPost } = useFetchPostQuery(postId);
  const { data: posts, isFetching: isFetchingPosts } = useFetchPostsQuery();

  useEffect(() => {
    console.log(posts)
    setFilteredPosts(posts);
    return () => {
      //
    }
  }, [posts])

  useEffect(() => {
    if (postId > 0) {

      const selectedPost = posts?.filter(post => post.id === postId);
      setFilteredPosts(selectedPost);
    } else {
      setFilteredPosts(posts);
    }
    return () => {
      //
    }
  }, [postId])


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
            Posts
          </Typography>
        </Container>
        <Container sx={{ mt: 1 }}>
          Enter post ID to fetch: &nbsp;
          <SearchField onChange={(e) => {
            setPostId(Number(e.target.value));
          }}></SearchField>
        </Container>
        <Container sx={{ mt: 2 }}>
          <Typography variant="h5">Search results</Typography>
          <List>
            {
              filteredPosts?.map((post: IPost, index: number) => {
                return <ListItem key={post.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <CommentIcon />
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
                          {post.id}
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
                          {post.title}
                        </Typography>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {post.body}
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