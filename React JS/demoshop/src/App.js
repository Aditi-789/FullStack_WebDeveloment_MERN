import logo from './logo.svg';
import './App.css';
import './components/Item';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const itemtwoName="Ghadi";
  return (
    <div>
      <Item name="Nirma">Hello mai hu first item ki name</Item>
      <ItemDate date="20" month="June" year="1973">Hello mai hu first item ki manufacturing date</ItemDate>

      <Item name={itemtwoName}></Item>
      <ItemDate date="10" month="July" year="1978"></ItemDate>

      <Item name="Surf Excel"></Item>
      <ItemDate date="5" month="January" year="1983"></ItemDate>
      
    <div className="App">
      Hello React
    </div>
    </div>
    
  );
}

export default App;
