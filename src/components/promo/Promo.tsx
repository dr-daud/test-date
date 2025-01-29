import { useState } from 'react';
import EventDescr from '../eventDescr/eventDescr';
import { IPeriodData } from '../../types/types';
import './promo.scss';

const Promo = () => {
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const periodData: IPeriodData = {
        firstPeriod: [
            { id: 1, year: 2015, text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
            { id: 2, year: 2016, text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
            { id: 3, year: 2017, text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
            { id: 4, year: 2018, text: 'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца' },
            { id: 5, year: 2019, text: 'Google объявил о создании 53-кубитного квантового компьютера.' },
            { id: 6, year: 2020, text: 'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полета' }
        ],
        secondPeriod: [
            { id: 7, year: 1987, text: '"Хищник"/Predator, США (реж. Джон Мактиран)' },
            { id: 8, year: 1988, text: '"Кто подставил кролика Роджера"/Who framed Roger Rabbit, США(реж. Роберт Земекис)' },
            { id: 9, year: 1989, text: '"Назад в будущее 2"/ Back To The Future 2, США (реж, Роберт Земекис)' },
            { id: 10, year: 1990, text: '"Крепкий орешек 2"/ Die Hard 2, США(реж. Ренни Харлин)' },
            { id: 11, year: 1991, text: '"Семейка Адамс" / The Addams Family, США, (реж. Барри Зонненфельд)' }
        ],
        thirdPeriod: [
            { id: 12, year: 1992, text: 'Нобелевская премия по литературе - Дерек Уолкотт, "За блестящий образец карибского эпоса в 64 разедлах".' },
            { id: 13, year: 1994, text: '"Бессоница"- роман Стивена Кинга' },
            { id: 14, year: 1995, text: 'Нобелевская премия по литературе - Шеймас Хини' }
        ],
        fourthdPeriod: [
            { id: 15, year: 1992, text: 'Нобелевская премия по литературе - Дерек Уолкотт, "За блестящий образец карибского эпоса в 64 разедлах".' },
            { id: 16, year: 1994, text: '"Бессоница"- роман Стивена Кинга' },
            { id: 17, year: 1995, text: 'Нобелевская премия по литературе - Шеймас Хини' }
        ],
        fifthPeriod: [
            { id: 18, year: 1987, text: '"Хищник"/Predator, США (реж. Джон Мактиран)' },
            { id: 19, year: 1988, text: '"Кто подставил кролика Роджера"/Who framed Roger Rabbit, США(реж. Роберт Земекис)' },
            { id: 20, year: 1989, text: '"Назад в будущее 2"/ Back To The Future 2, США (реж, Роберт Земекис)' },
            { id: 21, year: 1990, text: '"Крепкий орешек 2"/ Die Hard 2, США(реж. Ренни Харлин)' },
            { id: 22, year: 1991, text: '"Семейка Адамс" / The Addams Family, США, (реж. Барри Зонненфельд)' }
        ],
        sixthPeriod: [
            { id: 23, year: 1992, text: 'Нобелевская премия по литературе - Дерек Уолкотт, "За блестящий образец карибского эпоса в 64 разедлах".' },
            { id: 24, year: 1994, text: '"Бессоница"- роман Стивена Кинга' },
            { id: 25, year: 1995, text: 'Нобелевская премия по литературе - Шеймас Хини' }
        ],

    }

    const rotateCircle = (section: number) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const calculateRotation = () => {
        switch (activeSection) {
            case 1:
                return 'rotate(0deg)';
            case 2:
                return 'rotate(-60deg)';
            case 3:
                return 'rotate(-120deg)';
            case 4:
                return 'rotate(-180deg)';
            case 5:
                return 'rotate(-240deg)';
            case 6:
                return 'rotate(-300deg)';
            default:
                return 'rotate(0deg)';
        }
    };

    return (
        <div className='container'>
            <div className="wrapper">
                <h1 className="promo_title">Исторические <br />
                    даты</h1>
                <div className="main-date-wrapper">
                    <div className="date-start">2015</div>
                    <div className="date-end">2022</div>
                </div>
                <div className="line middle-vertical"></div>
                <div className="line middle-horizontal"></div>
                <div className="circle" style={{
                    transform: calculateRotation(),
                    transition: 'transform 1s',
                }}>
                    <div className="one-four">
                        <div className="one" onClick={() => rotateCircle(1)}>
                            <div className="one-inner" style={activeSection === 2 ? { transform: 'rotate(0deg)' } : activeSection === 3 ? { transform: 'rotate(60deg)' } : activeSection === 4 ? { transform: 'rotate(120deg)' } : activeSection === 5 ? { transform: 'rotate(180deg)' } : activeSection === 6 ? { transform: 'rotate(240deg)' } : undefined} >1</div>
                        </div>
                        <div className="four" onClick={() => rotateCircle(4)}>
                            <div className="four-inner" style={activeSection === 2 ? { transform: 'rotate(0deg)' } : activeSection === 3 ? { transform: 'rotate(60deg)' } : activeSection === 4 ? { transform: 'rotate(120deg)' } : activeSection === 5 ? { transform: 'rotate(180deg)' } : activeSection === 6 ? { transform: 'rotate(240deg)' } : undefined}>4</div>
                        </div>
                    </div>
                    <div className="two-five">
                        <div className="two" onClick={() => rotateCircle(2)}>
                            <div className="two-inner" style={activeSection === 2 ? { transform: 'rotate(-60deg)' } : activeSection === 3 ? { transform: 'rotate(0deg)' } : activeSection === 4 ? { transform: 'rotate(60deg)' } : activeSection === 5 ? { transform: 'rotate(120deg)' } : activeSection === 6 ? { transform: 'rotate(180deg)' } : undefined}>2</div>
                        </div>
                        <div className="five" onClick={() => rotateCircle(5)}>
                            <div className="five-inner" style={activeSection === 2 ? { transform: 'rotate(-60deg)' } : activeSection === 3 ? { transform: 'rotate(0deg)' } : activeSection === 4 ? { transform: 'rotate(60deg)' } : activeSection === 5 ? { transform: 'rotate(120deg)' } : activeSection === 6 ? { transform: 'rotate(180deg)' } : undefined}>5</div>
                        </div>
                    </div>
                    <div className="three-six">
                        <div className="three" onClick={() => rotateCircle(3)}>
                            <div className="three-inner" style={activeSection === 2 ? { transform: 'rotate(-120deg)' } : activeSection === 3 ? { transform: 'rotate(-60deg)' } : activeSection === 4 ? { transform: 'rotate(0deg)' } : activeSection === 5 ? { transform: 'rotate(60deg)' } : activeSection === 6 ? { transform: 'rotate(120deg)' } : undefined}>3</div>
                        </div>
                        <div className="six" onClick={() => rotateCircle(6)}>
                            <div className="six-inner" style={activeSection === 2 ? { transform: 'rotate(-120deg)' } : activeSection === 3 ? { transform: 'rotate(-60deg)' } : activeSection === 4 ? { transform: 'rotate(0deg)' } : activeSection === 5 ? { transform: 'rotate(60deg)' } : activeSection === 6 ? { transform: 'rotate(120deg)' } : undefined}>6</div>
                        </div>
                    </div>
                </div>

                <EventDescr periodData={periodData} />
            </div>
        </div >
    )
}

export default Promo;

