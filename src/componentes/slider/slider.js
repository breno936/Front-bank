import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

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
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="fundoSlide1">
        
        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-content">
                                        <div className="main-slider-content__inner" style={{backgroundColor:'#ffffff70',padding: '20px 0'}}>
                                            <div className="big-title">
                                                <h2>Feito para te trazer<br/>Praticidade</h2>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Aqui Você Encontra as Melhores Opções de cartões
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
        <SwiperSlide className="fundoSlide2">
               
        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-content">
                                        <div className="main-slider-content__inner" style={{backgroundColor:'#ffffff70',padding: '20px 0'}}>
                                            <div className="big-title">
                                                <h2>Com nosso banco suas chances<br/> são Maiores</h2>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Venha fazer seu empréstimo
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
        <SwiperSlide className="fundoSlide3">
       
        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-content">
                                        <div className="main-slider-content__inner" style={{backgroundColor:'#ffffff70',padding: '20px 0'}}>
                                            <div className="big-title">
                                                <h2>Nós pensamos no amanhã,<br/> e você?</h2>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Venha investir
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
        <SwiperSlide className="fundoSlide4">
               
        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-content">
                                        <div className="main-slider-content__inner" style={{backgroundColor:'#ffffff70', padding: '20px 0'}}>
                                            <div className="big-title">
                                                <h2>Garantimos a melhor segurança<br/></h2>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Crie sua conta
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
      </Swiper>
 
   </>
    );
  }
  
  export default Slider;