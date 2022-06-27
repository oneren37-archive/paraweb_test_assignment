import './style.scss';

const Article = (props) => {
    const {
        date, title, desc, author,
    } = props;

    return (
        <article
            className="article"
            style={
                `-ms-grid-column:${
                    props.i % 2
                };-ms-grid-row=${
                    props.i / 2}`
            }
        >
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
