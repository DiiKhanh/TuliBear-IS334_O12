import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./style.css";


const images = ["https://i.ibb.co/rfZz1zt/tmdt-avt.png", "https://i.ibb.co/SNJXTPY/1.jpg", "https://i.ibb.co/vq7YvtW/2.jpg", "https://i.ibb.co/DDbQVSF/3.jpg"];

const Slide = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((i, k) => (
        <SwiperSlide key={k}>
          <img src={i} alt={i} style={{ objectFit:"cover" }}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;