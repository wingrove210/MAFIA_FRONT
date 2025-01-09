import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

function ProtectedPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/');
        return;
      }

      try {
        const verifyResponse = await fetch(`http://localhost:8000/verify-token/${token}`);
        if (!verifyResponse.ok) {
          throw new Error('Token verification failed');
        }

        const userResponse = await fetch('http://localhost:8000/users/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);
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

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.username}!</h1>
          <p>This is a protected page. Only visible to authenticated users.</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProtectedPage;
