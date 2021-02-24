import './App.scss';
import { FloatingBox, BackgroundTimer } from './components';

function App() {
  return (
    <div className="wrapper">
      <BackgroundTimer />
      <FloatingBox />
    </div>
  );
}

export default App;
