import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu state="happy"/>
      <Menu state="sleepy"/>
      <Header color="빨강" num={1}/>
      <Header color="파랑" num={2}/>
      <Header color="녹색" num={3}/>
      </div>
  );
}

export default App;
