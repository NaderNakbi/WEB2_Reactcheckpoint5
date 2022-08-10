//import logo from './NaderNakbi.jpg';
import './App.css';
import Address from './Component/Profile/Address';
import Name from './Component/Profile/FullName';
import Photonader from './Component/Profile/ProfilePhoto';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Photonader/>
        <Name/>
        <Address/>
      </header>
    </div>
  );
}

export default App;
