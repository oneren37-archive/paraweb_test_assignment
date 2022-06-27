/* global document */
import * as Stickyfill from 'stickyfilljs';
import logo from './logo.svg';
import phoneIcon from './phone.svg';
import mailIcon from './mail.svg';
import './style.scss';

const Header = (props) => {
    const { phone, email } = props;

    setTimeout(() => {
        const header = document.querySelector('header');
        Stickyfill.add(header);
    }, 0);

    return (
        <header className="header">
            <div className="header__inner container">
                <a href="#" className="header__logo">
                    <img src={logo} alt="Logo" />
                </a>
                <nav className="header-nav">
                    <span className="header-nav__item">{phone}</span>
                    <span className="header-nav__item">{email}</span>
                </nav>
                <nav className="header-nav header-nav_mobile">
                    <img
                        className="header-nav__item header-nav__item_icon"
                        src={phoneIcon}
                        alt="phone"
                    />
                    <img
                        className="header-nav__item header-nav__item_icon"
                        src={mailIcon}
                        alt="mail"
                    />
                </nav>
            </div>
        </header>
    );
};

export default Header;
