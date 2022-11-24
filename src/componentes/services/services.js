import emprestimo from '../../img/emprestimo.jpg';
import cartao from '../../img/cartao.jpg';
import transferencia from '../../img/transferencia.jpg';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Services(){
    return(
<>

        <section className="wealth-secure-area">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Confira alguns de nossos serviços</h2>
                    <div className="sub-title">
                        <p>Temos as melhores opções de serviço para atender-lo.</p>
                    </div>
                </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="owl-item cloned" style={{width: "370.5px", marginRight: "30px"}}><div className="single-wealth-secure-box style4">
            <div className="img-box">
                <div className="img-box-inner" style={{height:"350px"}}>
                    <img src={emprestimo} alt=""/>
                </div>
                <div className="inner-title">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                    <h3><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Empréstimo pessoal</a></h3>
                    <div className="right-arrow-btn">
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#"><span className="icon-right-arrow"></span></a>
                    </div>
                </div>
            </div>
    
        </div></div>    
        </SwiperSlide>
        <SwiperSlide>
        <div className="owl-item cloned" style={{width: "370.5px", marginRight: "30px"}}><div className="single-wealth-secure-box style4">
            <div className="img-box">
                <div className="img-box-inner" style={{height:"350px"}}>
                    <img src={cartao} alt=""/>
                </div>
                <div className="inner-title">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                    <h3><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Cartões</a></h3>
                    <div className="right-arrow-btn">
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#"><span className="icon-right-arrow"></span></a>
                    </div>
                </div>
            </div>
      
        </div></div>    
        </SwiperSlide>
        {/* <SwiperSlide> 
                <div className="owl-item cloned" style={{width: "370.5px", marginRight: "30px"}}><div className="single-wealth-secure-box style4">
            <div className="img-box">
                <div className="img-box-inner">
                    <img src={wealth4} alt=""/>
                </div>
                <div className="inner-title">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                    <h3><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Depósito</a></h3>
                    <div className="right-arrow-btn">
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#"><span className="icon-right-arrow"></span></a>
                    </div>
                </div>
            </div>
           
        </div></div>    
        </SwiperSlide> */}
        <SwiperSlide>
        <div className="owl-item cloned" style={{width: "370.5px", marginRight: "30px"}}><div className="single-wealth-secure-box style4">
            <div className="img-box">
                <div className="img-box-inner" style={{height:"350px"}}>
                    <img src={transferencia} alt=""/>
                </div>
                <div className="inner-title">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                    <h3><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Transferência</a></h3>
                    <div className="right-arrow-btn">
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#"><span className="icon-right-arrow"></span></a>
                    </div>
                </div>
            </div>
    
        </div></div>    
        </SwiperSlide>
 
      </Swiper>
                
            </div>
        </section>
</>
    );
}
export default Services;