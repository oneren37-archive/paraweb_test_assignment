import ArticlesContainerControls from './ArticlesContainerControls';
import './style.scss';
import Article from '../Article';

export const MainContainer = () => {
    return (
        <div className="container">
            <ArticlesContainerControls />
            <div className="article-wrapper">Статьи загружаются</div>
        </div>
    );
};

export const ArticleContainer = (props) => {
    const { articles } = props;

    return (
        <div className="article-container">
            <table className="article-container_desktop">
                <tbody>
                    {articles
                        .map((article, i) => {
                            if (i % 2 === 0) {
                                return (
                                    <tr>
                                        <td><Article {...article} /></td>
                                        <td>
                                            {articles[i + 1] && (
                                                <Article {...articles[i + 1]} />
                                            )}
                                        </td>
                                    </tr>
                                );
                            }
                            return undefined;
                        })
                        .filter((el) => el)}
                </tbody>
            </table>

            <div className="article-container_mobile">
                {articles.map((article) => (
                    <Article {...article} />
                ))}
            </div>
        </div>
    );
};
