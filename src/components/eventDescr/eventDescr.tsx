import './eventDescr.scss';
import { IPeriodData } from '../../types/types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper.min.css'

const EventDescr = ({ periodData }: { periodData: IPeriodData }) => {

    return (
        < div className="descr-wrapper" >
            <button className="swiper-button-prev">Prev</button>
            <button className="swiper-button-next">Next</button>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                spaceBetween={50}
                slidesPerView={3}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >


                {
                    periodData.firstPeriod.map((item) =>
                    (
                        <SwiperSlide key={item.id}>
                            <div className="item">
                                <div className="year">{item.year} </div>
                                <div className="text">{item.text}</div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div >
    )
}

export default EventDescr