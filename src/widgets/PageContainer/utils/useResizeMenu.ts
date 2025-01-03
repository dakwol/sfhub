import { useState, useEffect, useRef } from 'react';

const useResizableMenu = (initialWidth: number) => {
  const [menuWidth, setMenuWidth] = useState<number>(initialWidth);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialMenuWidth, setInitialMenuWidth] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const sensitivity = 2// Коэффициент чувствительности

  // Загружаем начальную ширину меню из localStorage
  useEffect(() => {
    const savedWidth = localStorage.getItem('menuSize');
    if (savedWidth) {
      const parsedWidth = parseFloat(savedWidth);
      if (!isNaN(parsedWidth) && parsedWidth >= 0 && parsedWidth <= 100) {
        setMenuWidth(parsedWidth);
      }
    }
  }, []);

  // Функция для начала перетаскивания
  const startDragging = (e: React.MouseEvent) => {
    if (menuWidth <= 0) {
      // Разрешаем перетаскивание, только если ширина 0
      setIsDragging(true);
      setStartX(e.clientX);
      setInitialMenuWidth(0);
    } else {
      setIsDragging(true);
      setStartX(e.clientX);
      setInitialMenuWidth(menuWidth);
    }
  };

  // Функция для перетаскивания меню
  const dragMenu = (e: MouseEvent) => {
    if (!isDragging || !menuRef.current) return;

    const distanceMoved = e.clientX - startX; // Расстояние, которое переместилась мышь
    const newWidth = initialMenuWidth + (distanceMoved / window.innerWidth) * 100 * sensitivity; // С учетом чувствительности

    if (newWidth >= 0 && newWidth <= 100) {
      setMenuWidth(newWidth);
      localStorage.setItem('menuSize', `${newWidth}`);
    }
  };

  // Плавное уменьшение ширины до 0
  useEffect(() => {
    if (menuWidth <= 16) {

      const timer = setInterval(() => {
        if (menuWidth > 0) {
          setMenuWidth((prevWidth) => prevWidth - 0.5); // Плавно уменьшаем на 0.5% за интервал
        } else {
          clearInterval(timer);
        }
      }, 10); // Уменьшаем ширину каждые 10 миллисекунд
      return () => clearInterval(timer); // Очищаем интервал при размонтировании
    }
  }, [menuWidth]);

  // Функция для завершения перетаскивания
  const stopDragging = () => {
    setIsDragging(false);
  };

  // Обработчики событий для перетаскивания
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', dragMenu);
      window.addEventListener('mouseup', stopDragging);
    } else {
      window.removeEventListener('mousemove', dragMenu);
      window.removeEventListener('mouseup', stopDragging);
    }

    return () => {
      window.removeEventListener('mousemove', dragMenu);
      window.removeEventListener('mouseup', stopDragging);
    };
  }, [isDragging]);

  return {
    menuWidth,
    menuRef,
    isDragging,
    startDragging,
  };
};

export default useResizableMenu;
