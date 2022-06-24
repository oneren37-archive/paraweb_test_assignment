import logo from './logo.svg';
import telegram from './telegram.svg';
import vk from './vk.svg';
import youtube from './youtube.svg';
import twitter from './twitter.svg';
import './style.scss';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-row container">
                    <FooterLogo />
                    <FooterNav />
                </div>
                <div className="footer-row container">
                    <FooterCopyright />
                    <FooterSocial />
                </div>
            </footer>

            <footer className="footer footer_mobile">
                <div className="footer-inner container">
                    <FooterLogo />
                    <FooterNav />
                    <FooterSocial />
                    <FooterCopyright />
                </div>
            </footer>
        </>
    );
};

const FooterLogo = () => {
    return (
        <div className="footer__el">
            <a href="#">
                <img className="footer__img" src={logo} alt="logo" />
            </a>
        </div>
    );
};

const FooterNav = () => {
    return (
        <>
            <nav
                aria-label="footer navigation"
                className="footer__el footer-nav"
            >
                <li className="footer-nav__item">
                    <a href="#">Готовые решения</a>
                </li>
                <li className="footer-nav__item">
                    <a href="#">О нас</a>
                </li>
                <li className="footer-nav__item">
                    <a href="#">Блог</a>
                </li>
                <li className="footer-nav__item">
                    <a href="#">Контакты</a>
                </li>
            </nav>

            <nav
                aria-label="footer navigation"
                className="footer__el footer-nav footer-nav_mobile"
            >
                <div className="footer-nav-column">
                    <li className="footer-nav__item">
                        <a href="#" />
                        Готовые решения
                    </li>
                    <li className="footer-nav__item">
                        <a href="#" />
                        О нас
                    </li>
                </div>
                <div className="footer-nav-column">
                    <li className="footer-nav__item">
                        <a href="#" />
                        Блог
                    </li>
                    <li className="footer-nav__item">
                        <a href="#" />
                        Контакты
                    </li>
                </div>
            </nav>
        </>
    );
};

const FooterSocial = () => {
    return (
        <nav
            aria-label="footer navigation"
            className="footer__el footer__social"
        >
            <a href="#">
                <img src={telegram} alt="telegram" />
            </a>
            <a href="#">
                <img src={vk} alt="vk" />
            </a>
            <a href="#">
                <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
                <img src={youtube} alt="youtube" />
            </a>
        </nav>
    );
};

const FooterCopyright = () => {
    return (
        <span className="footer__el footer__copyright">
            © ООО «Лого», 2008—2022
        </span>
    );
};

export default Footer;
