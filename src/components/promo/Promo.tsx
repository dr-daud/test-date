import './promo.scss';

const Promo = () => {
    return (
        <div className='container'>
            <div className="wrapper">
                {/* <h1 className="promo_title">Исторические <br />
                    даты</h1> */}
                <div className="main-date-wrapper">
                    <div className="date-start">2015</div>
                    <div className="date-end">2022</div>
                </div>
                <div className="line middle-vertical"></div>
                <div className="line middle-horizontal"></div>
                <div className="circle">
                    <div className="one-four">
                        <div className="one"></div>
                        <div className="four"></div>
                    </div>
                    <div className="two-five">
                        <div className="two"></div>
                        <div className="five"></div>
                    </div>
                    <div className="three-six">
                        <div className="three"></div>
                        <div className="six"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Promo