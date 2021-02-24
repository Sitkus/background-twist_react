import './FloatingBox.scss';

function FloatingBox() {
  const timer = 5;

  return (
    <div>
      <p>Hello world, I'm just a floating box...</p>
      <p>
        I will dissapear in... <span>{timer}</span>
      </p>
    </div>
  );
}

export default FloatingBox;
