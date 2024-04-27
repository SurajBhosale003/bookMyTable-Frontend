import '../App.css'
function Menu() {
    const menuItems = [
        {
          id: 1,
          name: "Our Special Coffee",
          description: "An exquisite blend of rare beans for a rich and satisfying taste experience.",
          price: "$8.99",
          image: "image/menu-1.png"
        },
        {
          id: 2,
          name: "Espresso",
          description: "Bold and intense, perfect for a quick pick-me-up.",
          price: "$5.99",
          image: "image/menu-2.png"
        },
        {
          id: 3,
          name: "Cappuccino",
          description: "Smooth espresso with frothy milk, a timeless classic.",
          price: "$7.99",
          image: "image/menu-3.png"
        },
        {
          id: 4,
          name: "Latte",
          description: "Creamy and comforting, a delightful indulgence.",
          price: "$6.99",
          image: "image/menu-4.png"
        },
        {
          id: 5,
          name: "Mocha",
          description: "Rich chocolate infused with espresso, a decadent delight.",
          price: "$7.49",
          image: "image/menu-5.png"
        }
      ];
      
    return (
        <section className="menu" id="menu">
            <h1 className="heading">our menu <span>popular menu</span></h1>
            <div className="box-container">
                {/* <a href="#" className="box">
                    <img src="image/menu-1.png" alt="" />
                    <div className="content">
                        <h3>our special coffee</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, sed.</p>
                        <span>$8.99</span>
                    </div>
                </a> */}
                {menuItems.map(item => (
                    <a href="#" className="box" key={item.id}>
                        <img src={item.image} alt="" />
                        <div className="content">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span>{item.price}</span>
                        </div>
                    </a>
                ))}
                {/* Repeat similar structure for other menu items */}
            </div>
        </section>
    );
}

export default Menu;
