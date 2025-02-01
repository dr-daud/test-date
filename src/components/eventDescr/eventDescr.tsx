import "./eventDescr.scss";
import { useRef } from "react";
import { IPeriodItem } from "../../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import arrow from "../../assets/arrow.png";
import { PERIOD_DATA } from "../../constants";

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className={`arrow next-button`} onClick={onClick}>
            <img src={arrow} />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div className={`arrow prev-button`} onClick={onClick}>
            <img src={arrow} />
        </div>
    );
}

const EventDescr = ({ currentPeriod }: { currentPeriod: number }) => {
    const arrowRef = useRef<Slider | null>(null);

    const periodData = PERIOD_DATA[currentPeriod];

    const settings: Settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="descr-wrapper">
            <Slider ref={arrowRef} {...settings}>
                {periodData.map((item: IPeriodItem) => (
                    <div className="item" key={item.id}>
                        <div className="year">{item.year} </div>
                        <div className="text">{item.text}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default EventDescr;
