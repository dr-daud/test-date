import './eventDescr.scss';
import { IPeriodData } from '../../types/types'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const SimpleSlider = ({ periodData }: { periodData: IPeriodData }) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        < div className="descr-wrapper" >
            <Slider {...settings}>
                {periodData.firstPeriod.map((item) =>
                (
                    <div className="item" key={item.id}>
                        <div className="year">{item.year} </div>
                        <div className="text">{item.text}</div>
                    </div>
                ))}
            </Slider >
        </div >
    )
}

export default SimpleSlider