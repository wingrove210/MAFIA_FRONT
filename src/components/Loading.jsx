import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';
import AfterLoader from './AfterLoader';
export default function Loading() {
  const [showFirstComponent, setShowFirstComponent] = useState(true);

  useEffect(() => {
    // Через 5 секунд меняем состояние
    const timer = setTimeout(() => {
      setShowFirstComponent(false);
    }, 5000);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showFirstComponent ? (
        <Preloader/>
      ) : (
        <AfterLoader/>
      )}
    </div>
  );
}
