import React from 'react';
import './App.css';
import Products from './components/Product'; // Change import to match component name

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 7, 10), // August (months are 0-11)
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 200,
      date: new Date(2021, 1, 2), // February
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 11, 28), // December
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 4, 5), // May
    },
  ];

  return (
    <div className="App"> {/* Add className to apply your CSS */}
      <Products items={products} />
    </div>
  );
}

export default App;