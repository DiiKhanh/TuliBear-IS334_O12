import { LoadingButton } from "@mui/lab";
import { Box, Divider, Stack, Button, TextField, Typography, Container, IconButton, Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUserStore } from "~/store/useUserStore";
// import useAuthUser from "~/hooks/useAuthUser";

const ReviewItem = ({ review }) => {
  // const user = useAuthUser();
  const { user } = useUserStore();
  const onRemove = async () => {
  };
  return (
    <Box sx={{
      padding: 2,
      borderRadius: "5px",
      position: "relative",
      // opacity: false ? 0.6 : 1,
      opacity: 1,
      "&:hover": { backgroundColor: "background.paper" }
    }}>
      <Stack direction='row' spacing={2}>
        <Stack spacing={2} flexGrow={1}>
          <Stack spacing={1}>
            <Typography variant='h6' fontWeight='700'>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt={review.user.displayname} src={review.user.photoURL}/>
                <Typography sx={{ marginLeft: "5px", fontSize:"16px", display:{ xs:"none", sm:"block" } }}>{review.user?.displayName}</Typography>
              </IconButton>
            </Typography>
            <Typography variant='caption'>
              {review.createAt}
            </Typography>
          </Stack>
          <Typography variant='body1' textAlign='justify'>
            {review.content}
          </Typography>
          {user && user.uid === review.user.uid && (
            <LoadingButton
              variant='contained'
              startIcon={<DeleteIcon />}
              loadingPosition='start'
              loading={false}
              onClick={onRemove}
              sx={{
                position: { xs: "relative", md: "absolute" },
                right: { xs: 0, md: "10px" },
                marginTop: { xs: 2, md: 0 },
                width: "max-content"
              }}
            >
              Xóa
            </LoadingButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};


const Review = ({ reviews }) => {
  // const user = useAuthUser();
  const { user } = useUserStore();
  const [listReviews, setListReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState("");
  const [reviewCount, setReviewCount] = useState(0);

  const skip = 4;

  useEffect(() => {
    setListReviews([...reviews]);
    setFilteredReviews([...reviews].splice(0, skip));
    setReviewCount(reviews.length);
  }, [reviews]);

  const onAddReview = async () => {

  };

  const onLoadMore = () => {
    setFilteredReviews([...filteredReviews, ...[...listReviews].splice(page * skip, skip)]);
    setPage(page + 1);
  };

  const onRemoved = (id) => {
    if (listReviews.findIndex(e => e.id === id) !== -1) {
      const newListReviews = [...listReviews].filter(e => e.id !== id);
      setListReviews(newListReviews);
      setFilteredReviews([...newListReviews].splice(0, page * skip));
    } else {
      setFilteredReviews([...filteredReviews].filter(e => e.id !== id));
    }

    setReviewCount(reviewCount - 1);
  };

  return (
    <>
      <Container >
        <Stack spacing={4} marginBottom={2}>
          {filteredReviews.map((item) => (
            <Box key={item.id}>
              <ReviewItem review={item} onRemoved={onRemoved} />
              <Divider sx={{
                display: { xs: "block", md: "none" }
              }} />
            </Box>
          ))}
          {filteredReviews.length < listReviews.length && (
            <Button onClick={onLoadMore}>Tải thêm</Button>
          )}
        </Stack>
        {user && (
          <>
            <Divider />
            <Stack direction='row' spacing={2} marginTop={5}>
              <Stack spacing={2} flexGrow={1}>
                <Typography variant='h6' fontWeight='700'>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt={user.uid} src={user.photoURL}/>
                    <Typography sx={{ marginLeft: "5px", fontSize:"16px", display:{ xs:"none", sm:"block" } }}>{user?.displayName}</Typography>
                  </IconButton>
                </Typography>
                <TextField
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  multiline
                  rows={4}
                  placeholder='Viết đánh giá'
                  variant='outlined'
                />
                <LoadingButton
                  variant='contained'
                  size='large'
                  sx={{ width: "max-content" }}
                  startIcon={<SendOutlinedIcon />}
                  loadingPosition='start'
                  loading={false}
                  onClick={onAddReview}
                >
                Gửi
                </LoadingButton>
              </Stack>
            </Stack>
          </>
        )}
      </Container>
    </>
  );
};

export default Review;