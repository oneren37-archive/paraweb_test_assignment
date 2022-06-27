import Header from './components/Header';
import Carousel from './components/Carousel';
import { MainContainer } from './components/ArticlesContainer';
import Footer from './components/Footer';
import ExampleSlide from './components/Carousel/slides/ExampleSlide';
import './App.scss';
import MainController from './controllers/MainController';

function App() {
    const slides = [
        <ExampleSlide />,
        <ExampleSlide />,
        <ExampleSlide />,
        <ExampleSlide />,
        <ExampleSlide />,
    ];

    // eslint-disable-next-line no-new
    setTimeout(() => {
        new MainController();
    }, 0);

    return (
        <div className="page">
            <Header phone="8 800 000 00 00" email="sales@logo.ru" />
            <Carousel slides={slides} />
            <MainContainer />
            <Footer />
        </div>
    );
}

export default App;
