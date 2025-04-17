import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Текущий пользователь
  const [points, setPoints] = useState(0); // Очки пользователя

  return (
    <UserContext.Provider value={{ user, setUser, points, setPoints }}>
      {children}
    </UserContext.Provider>
  );
};
