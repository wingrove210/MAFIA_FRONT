import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

function ProtectedPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/');
        return;
      }

      try {
        const verifyResponse = await fetch(`http://localhost:8000/auth/verify-token/${token}`);
        if (!verifyResponse.ok) {
          throw new Error('Token verification failed');
        }

        const userResponse = await fetch('http://localhost:8000/auth/users/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);

          // Fetch orders for the user
          const ordersResponse = await fetch(`http://localhost:8000/order`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (ordersResponse.ok) {
            const ordersData = await ordersResponse.json();
            const userOrders = ordersData.filter(order => order.user_id === userData.id);

            // Fetch product details for each order
            const ordersWithDetails = await Promise.all(
              userOrders.map(async (order) => {
                const productResponse = await fetch(`http://localhost:8000/product/${order.product_id}`);
                const productData = await productResponse.json();

                return {
                  ...order,
                  product_name: productData.name,
                  product_price: productData.price,
                };
              })
            );

            setOrders(ordersWithDetails);
          } else {
            throw new Error('Failed to fetch orders');
          }
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/');
      }
    };

    fetchUserData();
  }, [navigate, setUser]);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:8000/auth/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
      } else {
        throw new Error('Failed to log out');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.username}!</h1>
          <p><strong>Points:</strong> {user.points}</p>
          <p>This is a protected page. Only visible to authenticated users.</p>

          <h2>Your Orders:</h2>
          {orders.length > 0 ? (
            <ul>
              {orders.map(order => (
                <li key={order.order_id}>
                  <strong>Product:</strong> {order.product_name} | 
                  <strong> Price:</strong> ${order.product_price} | 
                  <strong> Quantity:</strong> {order.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders found.</p>
          )}

          <button onClick={handleLogout} className='bg-gray-500 px-4 py-2'>
            Log Out
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProtectedPage;
