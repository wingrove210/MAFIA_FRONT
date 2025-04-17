// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// // import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/slices/cartSlice'; // Добавляем clearCart
// import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/slices/cartSlice';

// const CartPage = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRemove = (id) => {
//     dispatch(removeFromCart({ id }));
//   };

//   const handleIncrease = (id) => {
//     dispatch(increaseQuantity({ id }));
//   };

//   const handleDecrease = (id) => {
//     dispatch(decreaseQuantity({ id }));
//   };

//   const handleCheckout = () => {
//     dispatch(clearCart()); // Очищаем корзину
//     navigate('/'); // Перенаправляем на главную страницу
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cartItems.map((item) => (
//               <li key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
//                 <div>
//                   <h2 className="text-xl font-bold">{item.name}</h2>
//                   <p>{item.price} $</p>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <button onClick={() => handleDecrease(item.id)} className="px-3 py-1 bg-red-500 text-white rounded">
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => handleIncrease(item.id)} className="px-3 py-1 bg-green-500 text-white rounded">
//                     +
//                   </button>
//                   <button onClick={() => handleRemove(item.id)} className="px-3 py-1 bg-red-700 text-white rounded">
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-5">
//             <button
//               onClick={handleCheckout}
//               className="w-full py-3 bg-blue-500 text-white text-lg font-bold rounded-lg"
//             >
//               Оплатить
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;

// from fastapi import APIRouter, Depends, HTTPException, status
// from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
// from jose import JWTError, jwt
// from passlib.context import CryptContext
// from sqlalchemy.orm import Session
// from datetime import datetime, timedelta
// from typing import Optional, Union
// from pydantic import BaseModel
// from models.user import User
// from models.order import Order
// from database import get_db

// # Настройки безопасности и токенов
// SECRET_KEY = "your_secret_key"  # Замените на ваш секретный ключ
// ALGORITHM = "HS256"
// ACCESS_TOKEN_EXPIRE_MINUTES = 30
// oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
// pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

// token_blacklist = set()

// auth_router = APIRouter()

// class UserCreate(BaseModel):
//     username: str
//     password: str
//     points: Optional[int] = 0

// class Token(BaseModel):
//     access_token: str
//     token_type: str

// # Утилиты
// def get_user_by_username(db: Session, username: str):
//     return db.query(User).filter(User.username == username).first()

// def create_user(db: Session, user: UserCreate):
//     hashed_password = pwd_context.hash(user.password)
//     db_user = User(username=user.username, hashed_password=hashed_password)
//     db.add(db_user)
//     db.commit()
//     db.refresh(db_user)
//     return db_user

// def authenticate_user(db: Session, username: str, password: str):
//     user = get_user_by_username(db, username)
//     if not user or not pwd_context.verify(password, user.hashed_password):
//         return None
//     return user

// def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
//     to_encode = data.copy()
//     expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
//     to_encode.update({"exp": expire})
//     return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

// def get_all_users(db: Session):
//     return db.query(User).all()

// @auth_router.get("/users", response_model=list)
// def get_users(db: Session = Depends(get_db)):
//     users = get_all_users(db)
//     result = []
//     for user in users:
//         orders = [{
//             "order_id": order.id,
//             "product_name": order.product_name,
//             "quantity": order.quantity
//         } for order in user.orders]
//         result.append({
//             "id": user.id,
//             "username": user.username,
//             "points": user.points,
//             "orders": orders
//         })
//     return result

