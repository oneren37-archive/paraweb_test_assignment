import './style.scss';

const Article = (props) => {
    const {
        date, title, desc, author,
    } = props;

    return (
        <article className="article">
            <span className="article__date">
                {date.toLocaleString('ru', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </span>
            <h1 className="article__title">{title}</h1>
            <p className="article__description">{desc}</p>
            <span className="article__author-label">{author}</span>
        </article>
    );
};

export default Article;
