import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./style.css";


const images = ["https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/404324335_1077628107014220_1202747546454717743_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGSvVVzfgFG8_fSEsd_NShsFJO__y2KtbYUk7__LYq1to6XRZ7qsH5TMnSOqUNwY_vX5kdfoepvSBpcQ93LSiWH&_nc_ohc=Bb54FolK9i4AX9-FjD2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfANmfiK1NBpEQsZMkWrCrwxnFifK72vBCojzS_NdXKT5g&oe=65667FAF", "https://i.ibb.co/SNJXTPY/1.jpg", "https://i.ibb.co/vq7YvtW/2.jpg",
  "https://i.ibb.co/DDbQVSF/3.jpg"
];
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
          <img src={i} alt={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;