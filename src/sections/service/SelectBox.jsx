import ImageList from "@mui/material/ImageList";
import Checkbox from "@mui/material/Checkbox";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SelectBox() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    if (selectedImage === img) {
      setSelectedImage(null);
    } else {
      setSelectedImage(img);
    }
  };

  const handleClearSelection = () => {
    setSelectedImage(null);
  };
  return (
    <ImageList sx={{ overflow:"hidden" }}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">Danh sách hộp quà</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          {selectedImage === item.img && (
            <FormControlLabel
              control={ <Checkbox
                color="success"
                checked={true}
                inputProps={{ "aria-label": "select image" }}
                onClick={handleClearSelection}
              />} label="Đã chọn"
              labelPlacement="start"
            />
          )}
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            onClick={() => handleImageClick(item.img)}
            style={{ cursor: "pointer", maxHeight:"250px", objectFit:"cover", width:"100%" }}
          />

          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />

        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://thewowbox.net/home/wp-content/uploads/2021/12/IMG_3282.jpg",
    title: "Hộp quà 1",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "https://thewowbox.net/home/wp-content/uploads/2020/06/IMG_7722.jpg",
    title: "Hộp quà 2",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "https://thewowbox.net/home/wp-content/uploads/2020/06/IMG_7475.jpg",
    title: "Hộp quà 3",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "https://thewowbox.net/home/wp-content/uploads/2020/01/IMG_7471.jpg",
    title: "Hộp quà 4",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "https://product.hstatic.net/200000121007/product/hop-qua-tang-cover-thuong_afa0362f61234d9aa36a72176ad3d995_master.jpg",
    title: "Hộp quà 5",
    rows: 2,
    cols: 2,
    featured: true
  }
];