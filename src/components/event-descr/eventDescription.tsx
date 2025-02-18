import Slider, { Settings } from "react-slick";
import { useRef } from "react";
import { MouseEventHandler } from "react";

import { IPeriodItem } from "../../types/types";
import { PERIOD_DATA } from "../../constants";
import arrow from "../../assets/arrow.png";

import "./eventDescription.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
    onClick?: MouseEventHandler<HTMLDivElement>;
}

function SampleNextArrow({ onClick }: ArrowProps) {
    return (
        <div className={`arrow next-button`} onClick={onClick}>
            <img src={arrow} />
        </div>
    );
}

function SamplePrevArrow({ onClick }: ArrowProps) {
    return (
        <div className={`arrow prev-button`} onClick={onClick}>
            <img src={arrow} />
        </div>
    );
}

const EventDescription = ({ currentPeriod }: { currentPeriod: number }) => {
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
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                    dots: true,
                    arrows: false
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                    dots: true,
                    arrows: false
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                    dots: true,
                    arrows: false
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

export default EventDescription;
