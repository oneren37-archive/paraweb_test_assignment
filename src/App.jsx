import Header from './components/Header';
import Carousel from './components/Carousel';
import ArticlesContainer from './components/ArticlesContainer';
import Footer from './components/Footer';
import './App.scss';

function App() {
    return (
        <div className="page">
            <Header phone="8 800 000 00 00" email="sales@logo.ru" />
            <Carousel />
            <ArticlesContainer />
            <Footer />
        </div>
    );
}

export default App;
