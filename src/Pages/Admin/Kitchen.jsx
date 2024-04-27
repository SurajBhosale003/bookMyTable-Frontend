import { useEffect, useState } from 'react';
import { getReservedOrdersByTime, updateOrderStatus } from '../../Api';
import { Grid, Paper, Button } from '@mui/material';
import './Admin.css';
function Kitchen() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservedOrders = async () => {
      try {
        const data = await getReservedOrdersByTime();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reserved orders:', error);
        setError('Failed to fetch reserved orders');
        setLoading(false);
      }
    };

    fetchReservedOrders();
  }, []);

  const handleConfirmOrder = async (orderIndex) => {
    try {
      const order = orders[orderIndex];
      console.log('Inside Confirm Order Status')
      await updateOrderStatus(order._id, 'confirmed').then(() => { console.log('Order is confirmed')})
    } catch (error) {
      console.error('Error confirming order:', error);
      // Handle error
    }
  };

  const handleCancelOrder = async (orderIndex) => {
    try {
      const order = orders[orderIndex];
      await updateOrderStatus(order._id, 'cancelled');
    
    } catch (error) {
      console.error('Error cancelling order:', error);
      // Handle error
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='kitchen-panel'>
      <h1>Reserved Orders</h1>
      <Grid container spacing={2}>
        {orders.map((order, index) => (
          <Grid item xs={12} key={order._id}>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <div className={ `${order.bill.status}` }>

                <h2 >Status : {order.bill.status}</h2>
              <p>Order Number: {index + 1}</p>
              <p>Table Number: {order.bill.tableNumber}</p>
              <p>Full Name: {order.info.fullName}</p>
              <p>Phone: {order.info.phone}</p>
              <p>Location: {order.info.location}</p>
              <p>Total Bill: {order.bill.totalBill}</p>
                </div>
              <div className='btns'>
                <Button variant="contained" className="btn btn-primary" color="primary" onClick={() => handleConfirmOrder(index)}>Confirm</Button>
                <Button variant="contained" className="btn btn-primary" color="secondary" onClick={() => handleCancelOrder(index)}>Cancel</Button>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Kitchen;
