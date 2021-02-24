import { useState, useEffect } from 'react';
import './BackgroundTimer.scss';

function BackgroundTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const countup = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    function getRandomRGBColor() {
      const rgb = [];

      for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * Math.floor(256)));
      }

      return `rgb(${rgb.join(', ')})`;
    }

    return function cleanup() {
      if (timer === 30) {
        document.body.style.backgroundColor = getRandomRGBColor();
        setTimer(0);
      }

      clearInterval(countup);
    };
  });

  return (
    <div className="background-timer">
      <span className="background-timer__time">{timer}</span>
    </div>
  );
}

export default BackgroundTimer;
