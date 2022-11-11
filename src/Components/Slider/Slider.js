import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
import { banner } from "../../Data/data";
export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="slider"
    >
{banner.map((e,index)=>(
  <SwiperSlide key={index}>
        {" "}
        <img
          src={e.image}
          alt=""
        />
      </SwiperSlide>
))}

{/* <SwiperSlide>
        {" "}
        <img
          src="https://nowafarms.in/assets/img/gallery/01.jpg"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Leafy_Greens_Hydroponics.jpg/800px-Leafy_Greens_Hydroponics.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Systeme_AEROPONIC_573px.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Systeme_FLOOD%26DRAIN_573px.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Bengal_System.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hungarian_wax_peppers_roots_being_revealed_IMG_5673.JPG/800px-Hungarian_wax_peppers_roots_being_revealed_IMG_5673.JPG"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Young_plants_in_veg.jpg/800px-Young_plants_in_veg.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Schultz_Horticultural_Perlite.jpg/1920px-Schultz_Horticultural_Perlite.jpg" alt=""></img>
      </SwiperSlide> */}
      ......
    </Swiper>
  );
};
