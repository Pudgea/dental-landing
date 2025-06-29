import { Swiper, SwiperSlide } from "swiper/react";
import type { SubcategorySteps } from "../../../../models/service.model";
import { Navigation, Pagination } from "swiper/modules";
import Examination from "../../../Examination/examination";
import './index.css'
import { imgSrc } from "../../../../constants/devConstants";

const StepsServices = ({title, arr}:{title:string, arr: SubcategorySteps[]}) => {
    return ( <div className="steps-services">
        <div className="title">{title}</div>
        <Swiper
        effect="fade"
        fadeEffect={{
            crossFade: true,
        }}
        speed={1000}
        navigation={true}
            loop={true}
            modules={[Pagination, Navigation]}
            className="steps-services-slider"
        >
            {
                arr.map((item, i) =>
                    <SwiperSlide key={i}>
                        <Examination step={`Этап ${(i+1).toString()}`} head={item.title} img={item.img || `${imgSrc}/1step.png`} txt={item.desc} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    </div> );
}
 
export default StepsServices;