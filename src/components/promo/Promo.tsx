import CountUp from "react-countup";

import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { PERIOD_DATA } from "../../constants";
import EventDescr from '../eventDescr/eventDescr';

import './promo.scss';
import nextArr from "../../assets/next-arr.png";
import prevArr from "../../assets/prev-arr.png";

const Promo = () => {

    const media = useMediaQuery('(min-width: 1281px)');
    const items = [1, 2, 3, 4, 5, 6];
    const names = ["Категория", "Кино", "Литература", "Категория", "Категория", "Наука"]
    const radius = media ? 265 : 170;
    const [rotation, setRotation] = useState(30);
    const [selected, setSelected] = useState<number>(0);
    const periodData = PERIOD_DATA[selected];
    const years = {
        from: periodData[0].year,
        to: periodData[periodData.length - 1].year,
    };

    // для корректного воспроизведения анимации чисел
    const [prevYears, setPrevYears] = useState<{ from: number; to: number }>(
        years
    );

    const handleClick = (item: number) => {
        const index = items.indexOf(item)
        const currentAngle = -90 + index * 60
        setSelected(item - 1)
        setRotation(-60 - currentAngle)
        setPrevYears(years)
    }

    return (
        <div className="container">
            <div className="wrapper">
                <h1 className="promo-title">
                    Исторические <br />
                    даты
                </h1>
                <div className="line middle-vertical"></div>
                <div className="line middle-horizontal"></div>
                <div
                    style={{
                        position: 'relative',
                        width: radius * 2,
                        height: radius * 2,
                    }}
                >
                    <div className="main-date-wrapper">
                        <div className="date-start">
                            <CountUp start={prevYears.from} end={years.from} separator="" />
                        </div>
                        <div className="date-end">
                            <CountUp start={prevYears.to} end={years.to} separator="" />
                        </div>
                    </div>
                    <div className='circle'
                        style={{
                            transform: `rotate(${rotation}deg)`,
                            transition: 'transform 1s ease',
                        }}
                    >
                        {items.map((item, index) => {
                            const angle = (-90 + index * 60) * (Math.PI / 180)
                            const x = radius * Math.cos(angle) + radius
                            const y = radius * Math.sin(angle) + radius

                            return (
                                <div
                                    key={item}
                                    style={{
                                        position: 'absolute',
                                        left: `${x}px`,
                                        top: `${y}px`,
                                        transform: `rotate(${-rotation}deg)`,
                                        transition: 'transform 0.3s ease',
                                    }}
                                >
                                    <button
                                        className={selected === index ? "active small-circle" : "small-circle"}
                                        onClick={() => handleClick(item)}
                                    >
                                        {item}
                                    </button>
                                    <div className={selected === index ? "name" : "no-name"}>{names[index]}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="descr">
                    <div className="buttons">
                        <div className="circle-numbers">0{selected + 1}/0{items.length}</div>
                        <div>
                            <button className="prev-button"
                                onClick={() => handleClick(selected)}
                                disabled={selected === 0}>
                                <img src={prevArr} /></button>
                            <button className="next-button"
                                onClick={() => handleClick(selected + 2)}
                                disabled={selected === items.length - 1}>
                                <img src={nextArr} /></button>
                        </div>
                    </div>
                    <EventDescr currentPeriod={selected} />
                </div>
            </div>
        </div >
    )
}

export default Promo