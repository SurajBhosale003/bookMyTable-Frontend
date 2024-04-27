
import './App.css';
// import Header from './Pages/Header';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Review from './Pages/Review';
import Book from './Pages/Book';
import Footer from './Pages/Footer';

function HomeIndex() {
    return (
        <div className="App">
            {/* <Header /> */}
            <HomePage />
            <About />
            <Menu />
            <Review />
            <Book />
            <Footer />
        </div>
    );
}

export default HomeIndex;
