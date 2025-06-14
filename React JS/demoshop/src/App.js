import React from 'react';
import './App.css';
import Products from './components/Product'; 
import NewProduct from './components/NewProduct';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 7, 10), 
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 200,
      date: new Date(2021, 1, 2), 
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 11, 28), 
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 4, 5), 
    },
  ];

  function printProductData(data){
    console.log("I am inside App.js");
    console.log(data);
  }

  return (
    <div className="App">
      <Products items={products} />
      <NewProduct onPrintProduct={printProductData}/>
    </div>
  );
}

export default App;