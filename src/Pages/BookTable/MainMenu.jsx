import '../../App.css'
import './Table.css'
import { ToastContainer, toast } from 'react-toastify'; // Import toast container and toast
import 'react-toastify/dist/ReactToastify.css';
// import '../Pages.css'
import Footer from '../Footer'
import { useParams, useNavigate } from 'react-router-dom';

import  { useState } from 'react';

function MainMenu() {
    const { tableNumber } = useParams();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const menuItems = [
        {
            id: 1,
            name: "Our Special Coffee",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, sed.",
            price: "8.99",
            image: "image/menu-1.png"
        },
        {
            id: 2,
            name: "Espresso",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, odit.",
            price: "5.99",
            image: "image/menu-2.png"
        },
        {
            id: 3,
            name: "Cappuccino",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, doloremque.",
            price: "7.99",
            image: "image/menu-3.png"
        },
        {
            id: 4,
            name: "Latte",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cumque.",
            price: "6.99",
            image: "image/menu-4.png"
        },
        {
            id: 5,
            name: "Mocha",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fugit.",
            price: "7.49",
            image: "image/menu-5.png"
        }
    ];

// add cart 
const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
    toast.success('Item added successfully');

};

const confirmOrder = () => {
    navigate(`/confirmorder`, {
        state: { cart: cart, tableNumber: tableNumber }
    });
    console.log("Order confirm order")
};


    return (
        <>
            <ToastContainer/>
        <section className="menu" id="menu">
         <h1>Menu Order for Table {tableNumber}</h1><button type="button" className="btn btn-primary" onClick={() => confirmOrder(cart, tableNumber)}>Confirm Order</button>

            <h1 className="heading">our menu <span>popular menu</span></h1>
            <div className="box-container">
                    {menuItems.map(item => (
                        <div className="box" key={item.id}>
                            <img src={item.image} alt="image" />
                            <div className="content">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <span>${item.price}</span>
                                <br />
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
        <Footer/>
                </>
    );
}

export default MainMenu;
