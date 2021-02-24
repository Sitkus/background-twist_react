import { useState, useEffect } from 'react';
import './FloatingBox.scss';

function FloatingBox() {
  const [showBox, setShowBox] = useState(true);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    document.addEventListener('mousemove', resetShowBoxAndTimer);
    document.addEventListener('keypress', resetShowBoxAndTimer);

    const countdown = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    function resetShowBoxAndTimer() {
      setShowBox(true);
      setTimer(5);
    }

    function hideBoxWhenTimerIsZero() {
      if (timer === 0) {
        setShowBox(false);
        clearInterval(countdown);
      }
    }

    hideBoxWhenTimerIsZero();

    return function cleanup() {
      clearInterval(countdown);

      document.removeEventListener('mousemove', resetShowBoxAndTimer);
      document.removeEventListener('keypress', resetShowBoxAndTimer);
    };
  }, [showBox, timer]);

  return (
    <div className={`box ${showBox ? null : 'box--hidden'}`}>
      <p className="box__top-text">Hello world, I'm just a floating box...</p>
      <p className="box__bot-text">
        I will dissapear in: <span className="box__timer">{timer}</span>
      </p>
    </div>
  );
}

export default FloatingBox;
