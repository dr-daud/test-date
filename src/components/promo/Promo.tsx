import './promo.scss';

const Promo = () => {
    return (
        <div className='container'>
            <div className="wrapper">
                {/* <h1 className="promo_title">Исторические <br />
                    даты</h1> */}
                <div className="line middle-vertical"></div>
                <div className="line middle-horizontal"></div>
                <div className="main-date-wrapper">
                    <div className="date-start">2015</div>
                    <div className="date-end">2022</div>
                </div>
            </div>
        </div>
    )
}

export default Promo