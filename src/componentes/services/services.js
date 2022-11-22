import wealth1 from '../Finbank __ Responsive HTML 5 Template_files/wealth-secure-1.jpg';
import wealth2 from '../Finbank __ Responsive HTML 5 Template_files/wealth-secure-2.jpg';
import wealth3 from '../Finbank __ Responsive HTML 5 Template_files/wealth-secure-3.jpg';
import wealth4 from '../Finbank __ Responsive HTML 5 Template_files/wealth-secure-4.jpg';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

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
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="owl-item cloned" style={{width: "370.5px", marginRight: "30px"}}><div className="single-wealth-secure-box style4">
            <div className="img-box">
                <div className="img-box-inner">
                    <img src={wealth4} alt=""/>
                </div>
                <div className="inner-title">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                    <h3><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Saque</a></h3>
                    <div className="right-arrow-btn">
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#"><span className="icon-right-arrow"></span></a>
                    </div>
                </div>
            </div>
            <div className="text-box">
                <p>Beguiled and demoralized by charms pleasure of the moment so blinded by
                    they cannot and trouble.</p>
            </div>
        </div></div>    
        </SwiperSlide>
        <SwiperSlide>
        <div className="owl-item cloned" style={{width: "370.5px", marginRight: "30px"}}><div className="single-wealth-secure-box style4">
            <div className="img-box">
                <div className="img-box-inner">
                    <img src={wealth4} alt=""/>
                </div>
                <div className="inner-title">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                    <h3><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Saque</a></h3>
                    <div className="right-arrow-btn">
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#"><span className="icon-right-arrow"></span></a>
                    </div>
                </div>
            </div>
            <div className="text-box">
                <p>Beguiled and demoralized by charms pleasure of the moment so blinded by
                    they cannot and trouble.</p>
            </div>
        </div></div>    
        </SwiperSlide>
        <SwiperSlide> 
                <div className="owl-item cloned" style={{width: "370.5px", marginRight: "30px"}}><div className="single-wealth-secure-box style4">
            <div className="img-box">
                <div className="img-box-inner">
                    <img src={wealth4} alt=""/>
                </div>
                <div className="inner-title">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                    <h3><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Saque</a></h3>
                    <div className="right-arrow-btn">
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#"><span className="icon-right-arrow"></span></a>
                    </div>
                </div>
            </div>
            <div className="text-box">
                <p>Beguiled and demoralized by charms pleasure of the moment so blinded by
                    they cannot and trouble.</p>
            </div>
        </div></div>    
        </SwiperSlide>
        <SwiperSlide>
        <div className="owl-item cloned" style={{width: "370.5px", marginRight: "30px"}}><div className="single-wealth-secure-box style4">
            <div className="img-box">
                <div className="img-box-inner">
                    <img src={wealth4} alt=""/>
                </div>
                <div className="inner-title">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                    <h3><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Saque</a></h3>
                    <div className="right-arrow-btn">
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#"><span className="icon-right-arrow"></span></a>
                    </div>
                </div>
            </div>
            <div className="text-box">
                <p>Beguiled and demoralized by charms pleasure of the moment so blinded by
                    they cannot and trouble.</p>
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