import { useLocation } from 'react-router-dom';
import './Table.css'
import  { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { addOrder , updateTableStatus  } from '../../Api'
import { ToastContainer, toast } from 'react-toastify'; // Import toast container and toast
import 'react-toastify/dist/ReactToastify.css';




function ConfirmOrder() {
    const location = useLocation();
    const { cart, tableNumber } = location.state;

    // Now you can use cart and tableNumber in your component
    const [formData, setFormData] = useState({
    fullName: '',
    currentLocation: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  function calculateTotalPrice(cart) {
    let totalBillPay = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      totalBillPay += parseFloat(item.price);
    }
    return totalBillPay;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDateTime = new Date().toISOString();
    const concatenatedPhoneNumber = formData.phoneNumber + '_' + currentDateTime;

    const data = {
      phoneNumber: concatenatedPhoneNumber,
      dateTime: currentDateTime,
      bill: {
        cart: cart,
        totalBill: calculateTotalPrice(cart),
        status: 'reserving', // Assuming you want to set the initial status
        tableNumber: tableNumber,
        dateTime: currentDateTime,
      },
      info: {
        fullName: formData.fullName,
        phone: formData.phoneNumber,
        location: formData.currentLocation
      }
    };

    try {
      // Make a PUT request to update the table status to "reserving"
      await updateTableStatus(tableNumber, 'reserving');
      
      // If the table status is successfully updated, proceed to add the order
      await addOrder(data).then(()=>{toast.success('Order placed successfully!'); }).catch( ()=> {toast.error('Error adding order')});
      
      toast.success('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order!');
    }
  };
  
    return (
       
        <>
             <ToastContainer />
            <div className="order-page">
                <div className='bill'>
                <h1>Confirm Order</h1>
                <p>Table Number {tableNumber}</p>
                <h2>Cart</h2>
                <ol className="cart-list">
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ol>
                <p>Total Price: ${calculateTotalPrice(cart)}</p>
                </div>
                <div className="information">
                <div className='booking-form'>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Current Location"
          name="currentLocation"
          value={formData.currentLocation}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          required
        />
       
        <Button type="submit" variant="contained" color="primary">
          Book My Table
        </Button>
      </form>
    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmOrder;
