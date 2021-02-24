import './App.scss';
import FloatingBox from './components/FloatingBox';

function App() {
  const timer = new Date().getFullYear();

  return (
    <div>
      <FloatingBox />
    </div>
  );
}

export default App;
