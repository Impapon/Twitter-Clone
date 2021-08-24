
import './App.css';
import Feed from './Component/Feed/Feed';
import Menu from './Component/Menu/Menu';
import Widgets from './Component/Widgets/Widgets';

function App() {
  return (
    <div className="App">
      <Menu />
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
