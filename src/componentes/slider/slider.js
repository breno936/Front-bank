import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Slider() {
    return (
   <>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-content">
                                        <div className="main-slider-content__inner">
                                            <div className="big-title">
                                                <h2>Feito para te Ajudar<br/> No seu Dia a Dia</h2>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Aqui Você Encontra as Melhores Opções
                                                </p>
                                            </div>
                                            <div className="btns-box">
                                                <a className="btn-one" href="https://st.ourhtmldemo.com/new/finbank-demo/add-property.html">
                                                    <span className="txt">
                                                        Descubra
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="slider-buttom-box">
                        <a className="style2" href="https://st.ourhtmldemo.com/new/finbank-demo/#">Faça um Pagamento <span className="icon-play-button"></span></a>
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Faça uma Pergunta <span className="icon-play-button"></span></a>
                    </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
 
   </>
    );
  }
  
  export default Slider;