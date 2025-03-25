// components/WipeEffect.js
'use client'
import { useRef, useState, useEffect } from 'react';
import styles from './style.module.scss'

const WipeEffect = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);


  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    setCtx(context);

    // Установим размеры холста
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Зальем холст "стеклом"
    context.fillStyle = 'rgba(200, 200, 200, 1)';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = () => setIsDrawing(true);

  const stopDrawing = () => setIsDrawing(false);

  const draw = (e) => {
    if (!isDrawing || !ctx) return;

    // Получаем позицию мыши относительно холста
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out'; // Стирание
    drawSnowflake(ctx, x, y, 20);
  };

  function drawSnowflake(ctx, x, y, size) {
    ctx.save();
    ctx.translate(x, y);

    const branches = 6;
    const angle = (Math.PI * 2) / branches;

    ctx.beginPath();
    for (let i = 0; i < branches; i++) {
      drawBranch(ctx, size);
      ctx.rotate(angle);
    }
    ctx.fill(); // Заполняем снежинку для стирания
    ctx.restore();
  }

  // Функция для рисования одного луча снежинки
  function drawBranch(ctx, length) {
    ctx.moveTo(0, 0);
    ctx.lineTo(length, 0);

    ctx.save();
    for (let i = 0; i < 3; i++) {
      ctx.translate(length / 3, 0);
      ctx.lineTo(0, -length / 4);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, length / 4);
    }
    ctx.restore();
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Секретное сообщение!</h1>
      </div>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing} // Остановить рисование, если мышь покинула холст
      ></canvas>
    </div>
  );
};

export default WipeEffect;
