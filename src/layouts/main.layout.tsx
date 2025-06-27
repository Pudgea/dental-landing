import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../examination.css'
import Examination from '../components/Examination/examination';
import ServicesSlider from '../components/Services/ServicesSlider';
import MemoContainer from '../components/Memo/MemoContainer';
import whatsappClick from '../utils/whatsappClick';
import CommandMain from '../components/Command/CommandMain';
import { imgSrc } from '../constants/devConstants';
import MethodsBlock from '../components/Methods/MethodsBlock/MethodsBlock';

const MainLayout = () => {
    return ( 
        <div className="main-container">
        <main>
            <div className="clinic-slider-container">
                <div className="welcoming">
                    <p className="title">Добро пожаловать в iDentist</p>
                    <p className="txt">место, где рождаются уверенные улыбки</p>
                </div>
                <div className="csc-slider">
                    <Swiper
                      pagination={{
                        clickable: true,
                      }}
                      effect="fade"
                    fadeEffect={{
                        crossFade: true,
                    }}
                    speed={1000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                      loop={true}
                      modules={[Pagination, Autoplay]}
                      className="clinic-slider"
                    >
                      <SwiperSlide>
                        <img
                          src={imgSrc + "clinic.jpg"}
                          loading="lazy"
                          alt="Клиника iDentist"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={imgSrc + "clinic.jpg"}
                          loading="lazy"
                          alt="Интерьер клиники"
                        />
                      </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="mission-container">
                <div className="mc-txt-container">
                    <div className="mc-txt">
                        <p className="reg">В клинике iDentist мы соединяем высокие технологии, экспертность врачей и настоящую заботу о человеке. Наша цель — не просто лечить зубы, а менять отношение к стоматологии. Без страха, боли и стресса.</p>
                    </div>
                    {/* <div className="mc-txt">
                        <p className="reg">Наша цель — не просто лечить зубы, а менять отношение к стоматологии. Без страха, боли и стресса.</p>
                    </div> */}
                </div>
                <div className="mc-img">
                    <img src={imgSrc + "image.png"} alt=""/>
                </div>
            </div>
            <div className="examination">
            <Swiper
                      effect="fade"
                    fadeEffect={{
                        crossFade: true,
                    }}
                    speed={1000}
                    navigation={true}
                      loop={true}
                      modules={[Pagination, Navigation]}
                      className="examination-slider"
                    >
                      <SwiperSlide>
                        <Examination
                            img={imgSrc + '1step.png'}
                            step='Этап 1'
                            head='Первичная консультация:'
                            txt='На первичной консультации мы проводим подробную диагностику, включая фотопротокол и сбор полной информации о пациенте.'
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Examination 
                            img={imgSrc + '2step.png'}
                            step='Этап 2'
                            head='Врачебный консилиум:'
                            txt='Cпециалисты разных направлений внимательно изучают вашу ситуацию, чтобы понять все нюансы.'
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Examination
                            img={imgSrc + '3step.png'}
                            step='Этап 3'
                            head='Индивидуальный комплексный план лечения'
                            txt='На основе полученных данных мы составляем индивидуальный комплексный план лечения — с учетом потребностей, возможностей и целей пациента.'
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Examination
                            img={imgSrc + '4step.png'}
                            step='Этап 4'
                            head='Составление планов лечения'
                            txt='Вы получаете несколько продуманных вариантов и выбираете наиболее подходящий для себя путь — с уверенностью и поддержкой нашей команды.'
                        />
                      </SwiperSlide>
                    </Swiper>
            </div>
        </main>
        <div className="services">
            <main>
                <div className="services-container">
                    <p className="title">Мы предлагаем полный спектр стоматологических услуг</p>
                    <p className="txt">от профилактики до сложной имплантации и эстетической реставрации</p>
                </div>
                <div className="services-block-container">
                    <div className="sbc-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#373435" className="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
                            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
                        </svg>
                        <div className="">
                            <p className="head">Самые популярные услуги</p>
                            <p className="txt">Услуги, которые помогут вам улыбаться уверенно</p>
                        </div>
                    </div>
                    <ServicesSlider />
                </div>
                <div className="command-container">
                    <div className="sbc-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#373435" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11"/>
                        </svg>
                        <div className="">
                            <p className="head">Наша команда</p>
                            <p className="txt">узкопрофильные специалисты с многолетним опытом, каждый из которых — эксперт в своём направлении</p>
                        </div>
                    </div>
                    <CommandMain/>
                </div>
                <button onClick={whatsappClick} style={{width: '100%', border:"var(--bg) 1px solid !important", color: 'var(--bg)', fontWeight: 500, paddingBlock: '20px'}}>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>
            </main>
        </div>
        <main>
            <MethodsBlock />
            <MemoContainer/>
        </main>
    </div>
     );
}
 
export default MainLayout;