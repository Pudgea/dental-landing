import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceItem from './ServiceItem';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import "./ServiceSlider.css"

const ServicesSlider = () => {
    return ( 
        <div className="sbc-main">
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    el: '.swiper-pagination-custom',
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                }}
                speed={800}
                autoplay={{
                    delay: 1750,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, 
                }}
                loop={true}
                spaceBetween={10}
                centeredSlides={false}
                grabCursor={true}
                
                breakpoints={{
                    768: {
                        slidesPerView: 2.3,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 3.5,
                        spaceBetween: 35,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 45,
                    },
                    2560: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    }
                }}
                
                modules={[Pagination, Navigation, Autoplay]}
                className="service-slider"
                
                observeParents={true}
            >
                <SwiperSlide><ServiceItem img={"image2.png"} txt={"Лечение во сне"}/></SwiperSlide>
                <SwiperSlide><ServiceItem img={"implant.png"} txt={"Имплантация"}/></SwiperSlide>
                <SwiperSlide><ServiceItem img={"vin.png"} txt={"Виниры"}/></SwiperSlide>
                <SwiperSlide><ServiceItem img={"hygiene.png"} txt={"Проффесиональная гигиена"}/></SwiperSlide>
                <SwiperSlide><ServiceItem img={"bracers.png"} txt={"Брекеты | Элайнеры"}/></SwiperSlide>
                <SwiperSlide><ServiceItem img={"bleaching.png"} txt={"Отбеливание"}/></SwiperSlide>
                
                {/* Кастомные кнопки навигации */}
                <div className="swiper-button-prev-custom">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="swiper-button-next-custom">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
                {/* Кастомная пагинация */}
                <div className="swiper-pagination-custom"></div>
            </Swiper>
        </div>
     );
}
 
export default ServicesSlider;