import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    if (!user) {
      alert("Please log in to place an order.");
      navigate("/login");
      return;
    }

    try {
      for (const item of cartItems) {
        await fetch("http://localhost:8000/order/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            user_id: user.id,
            product_id: item.id,
            quantity: item.quantity,
          }),
        });
      }
      dispatch(clearCart());
      alert("Order placed successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  const handlePayWithPoints = async () => {
    if (!user) {
      alert("Please log in to use points.");
      navigate("/login");
      return;
    }

    const totalCost = calculateTotal();

    if (user.points < totalCost) {
      alert("Not enough points to complete the purchase.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/points/redeem?user_id=${user.id}&points=${totalCost}`, // Параметры передаются в URL
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    
      // Успешный результат
      setUser(response.data);
      dispatch(clearCart());
      alert("Purchase completed using points!");
      navigate("/");
    } catch (error) {
      console.error("Error redeeming points:", error);
    
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.detail || "Something went wrong!"}`);
      } else {
        alert("Failed to complete purchase. Please try again.");
      }
    }    
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p>{item.price} $</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span>{item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <h2 className="text-lg font-bold mb-3">
              Total: {calculateTotal()} $
            </h2>
            <button
              onClick={handleCheckout}
              className="w-full py-3 bg-blue-500 text-white text-lg font-bold rounded-lg mb-3"
            >
              Оплатить
            </button>
            <button
              onClick={handlePayWithPoints}
              className="w-full py-3 bg-green-500 text-white text-lg font-bold rounded-lg"
            >
              Оплатить баллами
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
