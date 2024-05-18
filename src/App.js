import './App.css';
import components from './components/Components';
function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <components.Menu></components.Menu>
        <div className='app__playlist'></div>
        <div className='app__playing'></div>
      </div>
    </div>
  );
}

export default App;
