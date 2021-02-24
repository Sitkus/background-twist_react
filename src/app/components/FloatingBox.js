import { useState, useEffect } from 'react';
import './FloatingBox.scss';

function FloatingBox() {
  const [showBox, setShowBox] = useState(true);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    document.addEventListener('mousemove', showBoxAgain);

    function showBoxAgain() {
      if (!showBox) {
        setShowBox(true);
        setTimer(5);
      }
    }

    const countdown = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer === 0) {
      setShowBox(false);
      clearInterval(countdown);
    }

    return function cleanup() {
      clearInterval(countdown);
      document.removeEventListener('mousemove', showBoxAgain);
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
