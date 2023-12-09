import ImageList from "@mui/material/ImageList";
import Checkbox from "@mui/material/Checkbox";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import pic10 from "~/../public/bangdo/10.png";
import pic11 from "~/../public/bangdo/11.png";
import pic12 from "~/../public/bangdo/12.png";
import pic13 from "~/../public/bangdo/13.png";
import pic14 from "~/../public/bangdo/14.png";
import pic17 from "~/../public/TC/17.png";
import pic18 from "~/../public/TC/18.png";
import pic23 from "~/../public/TC/23.png";

export default function SelectProduct() {
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
    img: "https://thewowbox.net/home/wp-content/uploads/2020/01/IMG_2107.jpg",
    title: "Vật phẩm 1",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "https://thewowbox.net/home/wp-content/uploads/2020/01/IMG_2115.jpg",
    title: "Vật phẩm 2",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "https://thewowbox.net/home/wp-content/uploads/2020/06/IMG_6175-8.jpg",
    title: "Vật phẩm 3",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "https://thewowbox.net/home/wp-content/uploads/2020/01/IMG_2101.jpg",
    title: "Vật phẩm 4",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: pic10,
    title: "Vật phẩm 5",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: pic11,
    title: "Vật phẩm 6",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: pic12,
    title: "Vật phẩm 7",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: pic13,
    title: "Vật phẩm 8",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: pic14,
    title: "Vật phẩm 9",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: pic17,
    title: "Vật phẩm 10",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: pic18,
    title: "Vật phẩm 11",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: pic23,
    title: "Vật phẩm 12",
    rows: 2,
    cols: 2,
    featured: true
  }
];