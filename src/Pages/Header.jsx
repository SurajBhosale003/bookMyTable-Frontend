
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function Header() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleMenuClick = () => {
        const menu = document.querySelector('#menu-btn');
        const navbar = document.querySelector('.navbar');
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    // Function to navigate to the "booktable" page
    // const handleBookTableClick = () => {
    //     navigate('/booktable'); // Navigate to the "booktable" page
    // };

    return (
        <header className="header">
            <div id="menu-btn" className="fas fa-bars" onClick={handleMenuClick}></div>
            <a href="" onClick={()=>{navigate('/'); }} className="logo">Boøk My Cafǝ <i className="fas fa-mug-hot"></i></a>
            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#review">review</a>
                <a href="#book">book</a>
            </nav>
            <button className="btn" onClick={()=>{navigate('/booktable'); }}>book a table</button> {/* Change anchor tag to button */}
        </header>
    );
}

export default Header;
