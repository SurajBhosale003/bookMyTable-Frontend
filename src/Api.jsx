// api.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://bookmytable-backend-axbt.onrender.com'; 

const api = axios.create({
  baseURL: API_URL
});

export const submitReview = async (formData) => {
  try {
    const response = await api.post('/api/reviews', formData);
    return response.data;
  } catch (error) {
    throw new Error('Error submitting review:', error);
  }
};
export const getTopReviews = async () => {
  try {
    const response = await api.get('/api/top-reviews');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching top reviews:', error);
  }
};
export async function addOrder(data) {
  try {
    const response = await api.post('/api/addorder', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status !== 200) {
      throw new Error('Failed to add order');
    }

    console.log('Order added successfully');
    return true; // Return true if the request was successful
  } catch (error) {
    console.error('Error adding order:', error);
    return false; // Return false if there was an error
  }
}

export const getReservedOrdersByTime = async () => {
  try {
    const response = await api.get('/api/getorders');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching reserved orders by time:', error);
  }
};


export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await api.put(`/api/updateorderstatus/${orderId}`, { status });
    return response.data;
  } catch (error) {
    throw new Error('Error updating order status:', error);
  }
};

export const updateTableStatus = async (tableNumber, status) => {
  try {
    const response = await api.put(`/api/updatetable/${tableNumber}`, { status });
    return response.data;
  } catch (error) {
    throw new Error('Error updating table status:', error);
  }
};

const useFetchTablesData = () => {
  const [tablesData, setTablesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/gettables');
        setTablesData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching table data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

  }, []); 

  return { tablesData, loading, error };
};

export default useFetchTablesData;