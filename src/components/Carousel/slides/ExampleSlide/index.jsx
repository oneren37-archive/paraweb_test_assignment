import './style.scss';

const ExampleSlide = () => {
    return (
        <div className="ex-slide-wrapper">
            <div className="container">
                <div className="ex-slide">
                    <h1 className="ex-slide__title">
                        Как бизнесу сохранять IT-кадры на фоне кризиса
                    </h1>
                    <p className="ex-slide__text">
                        Инструменты, которые могут использовать компании для
                        удержания сотрудников
                    </p>
                    <a className="ex-slide__link" href="#">
                        Подробнее
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExampleSlide;
