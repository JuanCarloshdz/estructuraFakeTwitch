
import './App.css';
import Body from './Body';
import Header from './Header';
import SideBar from './SideBar';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__main">
        <SideBar />
        <Body />
      </div>

    </div>
  );
}

export default App;
