/* global document window */
import Siema from 'siema';
import './style.scss';

const Carousel = (props) => {
    const { slides } = props;

    setTimeout(() => {
        const siema = new Siema({
            selector: '.carousel',
            onInit() {
                const first = document.querySelector('.carousel__dot_0');
                first.classList.add('carousel__dot_active');
                this.prevSlide = 0;
            },
            onChange() {
                const prev = document.querySelector(
                    `.carousel__dot_${this.prevSlide}`,
                );
                const current = document.querySelector(
                    `.carousel__dot_${this.currentSlide}`,
                );

                prev.classList.remove('carousel__dot_active');
                current.classList.add('carousel__dot_active');

                this.prevSlide = this.currentSlide;
            },
        });

        window.eventEmitter.on('moveCarousel', (slideIndex) => {
            siema.goTo(slideIndex);
        });

        document.querySelectorAll('.carousel__dot').forEach((dot) => {
            dot.addEventListener('click', (e) => {
                e.target.classList.forEach((c) => {
                    if (c.match(/carousel__dot_(\d+)/)) {
                        siema.goTo(Number(/\d+/[Symbol.match](c)[0]));
                    }
                });
            });
        });
    }, 0);

    return (
        <>
            <div className="carousel">
                {slides.map((slide) => (
                    <div className="carousel-slide">{slide}</div>
                ))}
            </div>
            <div className="container carousel-dots">
                {slides.map((slide, index) => (
                    <div
                        className={`carousel__dot carousel__dot_${index}`}
                    />
                ))}
            </div>
        </>
    );
};

export default Carousel;
