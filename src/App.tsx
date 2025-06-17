import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './examination.css'
import Examination from './components/Examination/examination';
import CommandMain from './components/Command/CommandMain';
import ServicesSlider from './components/Services/ServicesSlider';
import whatsappClick from './utils/whatsappClick';

function App() {
  return (
    <>
    <nav>
        <div className="logo">
            <img src="logo.jpg" alt=""/>
        </div>
        <ul>
            <li>КЛИНИКА</li>
            <li>УСЛУГИ</li>
            <li>КОМАНДА</li>
            <li id="essential-info">
                <div className="ei-data">
                    <div className="ei-address">
                        <i className="bi bi-geo-alt-fill"></i>
                        <p>Мангилик Ел 36</p>
                    </div>
                    <div className="ei-address">
                        <i className="bi bi-telephone-fill"></i>
                        <p>+993 64 076637</p>
                    </div>
                </div>
                {/* <button>=</button> */}
            </li>
        </ul>
    </nav>
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
                          src="clinic.jpg"
                          loading="lazy"
                          alt="Клиника iDentist"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="clinic.jpg"
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
                        <p className="reg">В клинике iDentist мы соединяем высокие технологии, экспертность врачей и настоящую заботу о человеке.</p>
                    </div>
                    <div className="mc-txt">
                        <p className="reg">Наша цель — не просто лечить зубы, а менять отношение к стоматологии. Без страха, боли и стресса.</p>
                    </div>
                </div>
                <div className="mc-img">
                    <img src="image.png" alt=""/>
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
                            img={'1step.png'}
                            step='Этап 1'
                            head='Сбор данных о состоянии здоровья:'
                            txt='сбор анамнеза и противопоказаний для того, чтобы гарантировать вам 100% приживление импланта'
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Examination 
                            img={'2step.png'}
                            step='Этап 2'
                            head='Фотопротокол + 3D ĸомпьютерная томография:'
                            txt='для детального анализа объема вашей кости и фиксации первоначальной клинической ситуации'
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Examination
                            img={'3step.png'}
                            step='Этап 3'
                            head='На основе компьютерного моделирования врач рассчитает толщину и высоту кости'
                            txt='благодаря чему с точностью до миллиметра определит область установки импланта'
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Examination
                            img={'4step.png'}
                            step='Этап 4'
                            head='Составление 3 планов лечения'
                            txt='с различными системами имплантов от эконом до премиум-сегмента'
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Examination
                            img={'5step.png'}
                            step='Этап 5'
                            head='Выбор даты и времени операции'
                            txt='Установка импланта зуба длится 20 минут — быстрее, чем обычный стоматологический прием: без болевых ощущений; с минимальной травматичностью; без отёков.'
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
                <button onClick={whatsappClick} style={{width: '100%', border:"var(--bg) 1px solid !important", color: 'var(--bg)', fontWeight: 500, paddingBlock: '20px'}}>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>
            </main>
        </div>
        <main>
        </main>
    </div>
    </>
  )
}

export default App  