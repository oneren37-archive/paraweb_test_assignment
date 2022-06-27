/* global document */
import * as Stickyfill from 'stickyfilljs';
import initCalendar from '../../../utils/calendar';
import userIcon from './user.svg';
import arrowDown from './chevron-down.svg';
import './style.scss';

const ArticlesContainerControls = () => {
    setTimeout(() => {
        const control = document.querySelector('.article-container-controls');
        Stickyfill.add(control);
    }, 0);

    return (
        <div className="article-container-controls">
            <AuthorSelect />
            <DateSelect />
        </div>
    );
};

const AuthorSelect = () => {
    return (
        <div className="author-select">
            <img
                className="author-select__img author-select__img_user"
                src={userIcon}
                alt="user"
            />
            <select className="author-select__select">
                <option selected="true">Выбор автора</option>
            </select>
            <img
                className="author-select__img author-select__img_arrow"
                src={arrowDown}
                alt="arrow"
            />
        </div>
    );
};

const DateSelect = () => {
    setTimeout(() => {
        initCalendar('#date-start', '#date-end');
    }, 0);

    return (
        <div className="date-select">
            <input
                className="date-select__start"
                placeholder="От"
                id="date-start"
                type="text"
                autoComplete="off"
            />
            <span>-</span>
            <input
                className="date-select__end"
                placeholder="До"
                id="date-end"
                type="text"
                autoComplete="off"
            />
        </div>
    );
};

export default ArticlesContainerControls;
