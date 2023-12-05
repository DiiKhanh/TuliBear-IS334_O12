import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import Box from "@mui/material/Box";

const ThumbsGallery = ({ image }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box
      sx={{
        "& .swiper-slide":{
          backgroundPosition:"center",
          backgroundSize:"cover",
          overflow:"hidden"
        },
        "& .swiper-slide-active": { opacity: 1 }
      }}
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        spaceBetween={10}
        navigation={true}
        freeMode={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Navigation, Thumbs, Zoom, FreeMode]}
        zoom={true}
      >
        {
          image?.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img src={i}
                  style={{ width:"100%",
                    aspectRatio:"2/1.5",
                    verticalAlign:"middle", borderRadius:"5px", objectFit:"cover" }}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Box sx={{
        "& .swiper": {
          height:"auto",
          boxShadow:"none"
        },
        "& .swiper-slide-thumb-active":{
          opacity:"1 !important"
        }
      }}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView="auto"
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {
            image?.map((i, index) => (
              <SwiperSlide key={index} style={{
                padding:"10px 0",
                opacity: 0.4,
                width:"25%"
              }}>
                <img src={i}
                  style={{ width:"100%",
                    aspectRatio:"0.5/0.5",
                    verticalAlign:"middle", borderRadius:"5px", objectFit:"cover" }}
                  loading="lazy"
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box>
    </Box>
  );
};

export default ThumbsGallery;
