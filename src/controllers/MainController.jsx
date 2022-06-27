/* global document window */
import { ArticleContainer } from '../components/ArticlesContainer';

const MainController = function () {
    this.articlesData = [];
    this.filterState = {
        author: null,
        date: [null, null],
    };

    this.articlesContainer = document.querySelector('.article-wrapper');
    this.authorsSelectElement = document.querySelector(
        '.author-select__select',
    );
    this.dateStartInput = document.querySelector('.date-select__start');
    this.dateEndInput = document.querySelector('.date-select__end');

    this.fetchData = () => {
        return fetch('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
            .then((res) => res.json())
            .then((res) => {
                this.articlesData = res.articles.map((article) => ({
                    date: new Date(article.publishedAt),
                    author:
                        article.author === null
                            ? 'Автор неизвестен'
                            : article.author,
                    title: article.title,
                    desc: article.description,
                }));
            });
    };

    this.renderArticles = (articles) => {
        this.articlesContainer.innerHTML = '';
        if (articles.length === 0) this.articlesContainer.appendChild(<p>Нет подходящих статей</p>);
        else {
            this.articlesContainer.appendChild(
                <ArticleContainer articles={articles} />,
            );
        }
    };

    this.renderAuthorSelect = () => {
        this.articlesData.forEach((article) => {
            this.authorsSelectElement.appendChild(
                <option>{article.author}</option>,
            );
        });
    };

    this.bindEvents = () => {
        this.authorsSelectElement.addEventListener('change', () => {
            const val = this.authorsSelectElement.value;
            this.filterState.author = val === 'Выбор автора' ? null : val;
            this.filter();
        });

        window.eventEmitter.on('startDateChanged', () => {
            const val = this.dateStartInput.value;
            if (val === '') {
                this.filterState.date[0] = null;
                this.filter();
            } else if (!Number.isNaN(Date.parse(this.dateStartInput.value))) {
                this.filterState.date[0] = new Date(this.dateStartInput.value);
                this.filter();
            }
        });

        this.dateStartInput.addEventListener('keydown', (e) => e.preventDefault());
        this.dateEndInput.addEventListener('keydown', (e) => e.preventDefault());

        window.eventEmitter.on('endDateChanged', () => {
            const val = this.dateEndInput.value;
            if (val === '') {
                this.filterState.date[1] = null;
                this.filter();
            } else if (!Number.isNaN(Date.parse(val))) {
                this.filterState.date[1] = new Date(
                    new Date(val).getTime() + 3600 * 1000 * 24,
                );
                this.filter();
            }
        });
    };

    this.filter = () => {
        this.renderArticles(
            this.articlesData
                .filter((article) => {
                    if (this.filterState.author === null) return true;
                    return article.author === this.filterState.author;
                })
                .filter((article) => {
                    const [start, end] = this.filterState.date;
                    if (start !== null && article.date < start) return false;
                    if (end !== null && article.date > end) return false;
                    return true;
                }),
        );
    };

    this.fetchData().then(() => {
        this.renderArticles(this.articlesData);
        this.renderAuthorSelect();
        this.bindEvents();
    });
};

export default MainController;
